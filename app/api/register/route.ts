import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

   // Check duplicate email
const existingEmail = await Registration.findOne({
  email: body.email,
});

if (existingEmail) {
  return NextResponse.json({
    success: false,
    error: "Email already registered",
  });
}

// Check duplicate roll number
const existingRoll = await Registration.findOne({
  rollNumber: body.rollNumber,
});

if (existingRoll) {
  return NextResponse.json({
    success: false,
    error: "Roll number already registered",
  });
}

   const registrationId =
  "IX2025-" +
  Math.floor(100000 + Math.random() * 900000);

const registration = await Registration.create({
  ...body,
  registrationId,
});

console.log("Registration saved");
console.log("Sending email to:", body.email);

 const emailResponse = await transporter.sendMail({
  from: `"Insight-X" <${process.env.GMAIL_USER}>`,
  to: body.email,
  subject: "🎉 Insight-X Registration Confirmed",

  html: `
  <div style="font-family:Arial,sans-serif;padding:30px;background:#f4f4f4">
    
    <div style="
      max-width:700px;
      margin:auto;
      background:white;
      border-radius:12px;
      overflow:hidden;
      box-shadow:0 4px 20px rgba(0,0,0,.08);
    ">
      
      <div style="
        background:#2563eb;
        color:white;
        padding:30px;
        text-align:center;
      ">
        <h1>🎉 Registration Successful</h1>
        <p>Insight-X 2025</p>
      </div>

      <div style="padding:30px">

        <h2>Hello ${body.fullName},</h2>

        <p>
          Thank you for registering for
          <strong>Insight-X 2025</strong>.
        </p>

        <h3>Your Registration Details</h3>

        <table style="
          width:100%;
          border-collapse:collapse;
          margin-top:15px;
        ">
          <tr>
            <td><strong>Name</strong></td>
            <td>${body.fullName}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${body.email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${body.phone}</td>
          </tr>

          <tr>
            <td><strong>Branch</strong></td>
            <td>${body.branch}</td>
          </tr>

          <tr>
            <td><strong>Year</strong></td>
            <td>${body.year}</td>
          </tr>

          <tr>
            <td><strong>Roll Number</strong></td>
            <td>${body.rollNumber}</td>
          </tr>
        </table>

        <hr style="margin:25px 0"/>

        <h3>Event Details</h3>

        <p><strong>Date:</strong> 13 October 2025</p>
        <p><strong>Time:</strong> 5:00 PM</p>
        <p><strong>Venue:</strong> B-113</p>

        <hr style="margin:25px 0"/>

        <p>
          We look forward to seeing you at Insight-X.
        </p>

      </div>
    </div>
  </div>
  `,
});

console.log("EMAIL RESPONSE:", emailResponse);

    return NextResponse.json({
  success: true,
  registration,
  registrationId,
});
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Server Error",
      },
      { status: 500 }
    );
  }
}