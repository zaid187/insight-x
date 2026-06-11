"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { CheckCircle2, Mail, Home } from "lucide-react";
import Navbar from "@/components/navbar";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
const [registrationId, setRegistrationId] = useState("");
const [registeredEmail, setRegisteredEmail] = useState("");
const validateForm = () => {
  const newErrors = {
    fullName: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    rollNumber: "",
  };

  if (!formData.fullName.trim()) {
  newErrors.fullName = "Full name is required";
}

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    newErrors.email = "Invalid email address";
  }

  if (!formData.phone) {
    newErrors.phone = "Phone number is required";
  } else if (formData.phone.length !== 10) {
    newErrors.phone = "Phone number must be exactly 10 digits";
  }
  
  if (!formData.branch) {
  newErrors.branch = "Please select your branch";
}

if (!formData.year) {
  newErrors.year = "Please select your year";
}

if (!formData.rollNumber.trim()) {
  newErrors.rollNumber = "Roll number is required";
} else if (formData.rollNumber.length !== 11) {
  newErrors.rollNumber = "Roll number must be exactly 11 digits";
}

  setErrors(newErrors);

  return !Object.values(newErrors).some(Boolean);
};

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;
      setLoading(true);

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
 setRegistrationId(data.registrationId);
      console.log("Response:", data);
if (data.success) {
  setRegistrationId(data.registrationId);
  setRegisteredEmail(formData.email);
  setStep(4);
  return;
}

if (data.error === "Email already registered") {
  setErrors({
    ...errors,
    email: "Email already registered. Please use another email.",
  });

  setStep(1);
  return;
}

alert(data.error || "Registration Failed");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    rollNumber: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    rollNumber: "",
  });

  return (
    
    <main className="min-h-screen bg-background px-6 py-20 text-foreground">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-medium tracking-[0.3em] text-blue-400">
            INSIGHT-X 2025
          </div>

          <h1 className="text-5xl font-bold md:text-7xl">
            Register For Insight-X
          </h1>

          <p className="mt-4 text-zinc-400">
            Complete your registration in a few simple steps.
          </p>
        </div>

        {/* Step Indicator */}

        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center">
          <div className="flex items-center gap-4">
            <div
              className={`${
                step >= 1 ? "bg-blue-600" : "bg-white/10"
              } flex h-12 w-12 items-center justify-center rounded-full transition`}
            >
              1
            </div>

            <div className="h-px w-20 bg-white/10" />

            <div
              className={`${
                step >= 2 ? "bg-blue-600" : "bg-white/10"
              } flex h-12 w-12 items-center justify-center rounded-full transition`}
            >
              2
            </div>

            <div className="h-px w-20 bg-white/10" />

            <div
              className={`${
                step >= 3 ? "bg-blue-600" : "bg-white/10"
              } flex h-12 w-12 items-center justify-center rounded-full transition`}
            >
              3
            </div>
          </div>

          <div className="mt-4 flex gap-14 text-sm text-zinc-400">
            <span>Personal</span>
            <span>Academic</span>
            <span>Confirm</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* FORM */}

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
            "
          >
            {/* STEP 1 */}

            {step === 1 && (
              <>
                <h2 className="mb-8 text-3xl font-bold">Personal Details</h2>

                <div className="space-y-5">
                  <input
  value={formData.fullName}
  onChange={(e) => {
    setFormData({
      ...formData,
      fullName: e.target.value,
    });

    setErrors({
      ...errors,
      fullName: "",
    });
  }}
  placeholder="Full Name"
  className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
/>
                {errors.fullName && (
  <p className="mt-1 text-sm text-red-500">
    {errors.fullName}
  </p>
)}
                  <input
  value={formData.email}
  onChange={(e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });

    setErrors({
      ...errors,
      email: "",
    });
  }}
  placeholder="Email Address"
  className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
/>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");

                      if (value.length <= 10) {
                        setFormData({
                          ...formData,
                          phone: value,
                        });
                      }
                    }}
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  />
                  
                </div>
  

                <button
                  onClick={() => {
  const newErrors = {
    fullName: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    rollNumber: "",
  };

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full name is required";
  }

  console.log("EMAIL =", formData.email);

if (!formData.email.trim()) {
  newErrors.email = "Email is required";
} else if (
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
) {
  newErrors.email = "Invalid email address";
}

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (formData.phone.length !== 10) {
    newErrors.phone = "Phone number must be exactly 10 digits";
  }

  setErrors(newErrors);

  if (Object.values(newErrors).some(Boolean)) {
    return;
  }

  setStep(2);
}}
                  className="
                    mt-8
                    rounded-xl
                    bg-blue-600
                    px-8
                    py-3
                    transition
                    hover:bg-blue-500
                  "
                >
                  Continue →
                </button>
              </>
            )}

        {/* STEP 2 */}

{step === 2 && (
  <>
    <h2 className="mb-8 text-3xl font-bold">Academic Details</h2>

    <div className="space-y-5">
      {/* Branch */}

      <select
        value={formData.branch}
        onChange={(e) => {
          setFormData({
            ...formData,
            branch: e.target.value,
          });

          setErrors({
            ...errors,
            branch: "",
          });
        }}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4"
      >
        <option value="">Select Branch</option>
        <option value="AI & DS">AI & DS</option>
        <option value="Computer Engineering">
          Computer Engineering
        </option>
        <option value="Information Technology">
          Information Technology
        </option>
        <option value="EXTC">EXTC</option>
      </select>

      {errors.branch && (
        <p className="mt-1 text-sm text-red-500">
          {errors.branch}
        </p>
      )}

      {/* Year */}

      <select
        value={formData.year}
        onChange={(e) => {
          setFormData({
            ...formData,
            year: e.target.value,
          });

          setErrors({
            ...errors,
            year: "",
          });
        }}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4"
      >
        <option value="">Select Year</option>
        <option value="FY">FY</option>
        <option value="SY">SY</option>
        <option value="TY">TY</option>
        <option value="Final Year">Final Year</option>
      </select>

      {errors.year && (
        <p className="mt-1 text-sm text-red-500">
          {errors.year}
        </p>
      )}

      {/* Roll Number */}

      <input
        type="text"
        maxLength={11}
        value={formData.rollNumber}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");

          if (value.length <= 11) {
            setFormData({
              ...formData,
              rollNumber: value,
            });

            setErrors({
              ...errors,
              rollNumber: "",
            });
          }
        }}
        placeholder="Roll Number (e.g. 16010122014)"
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4"
      />

      {errors.rollNumber && (
        <p className="mt-1 text-sm text-red-500">
          {errors.rollNumber}
        </p>
      )}
    </div>

    <div className="mt-8 flex gap-4">
      <button
        onClick={() => setStep(1)}
        className="
          rounded-xl
          border
          border-white/10
          px-8
          py-3
        "
      >
        Back
      </button>

      <button
        onClick={() => {
          const newErrors = {
            ...errors,
            branch: "",
            year: "",
            rollNumber: "",
          };

          if (!formData.branch) {
            newErrors.branch = "Please select your branch";
          }

          if (!formData.year) {
            newErrors.year = "Please select your year";
          }

          if (!formData.rollNumber.trim()) {
            newErrors.rollNumber = "Roll number is required";
          } else if (formData.rollNumber.length !== 11) {
            newErrors.rollNumber =
              "Roll number must be exactly 11 digits";
          }

          setErrors(newErrors);

          if (
            newErrors.branch ||
            newErrors.year ||
            newErrors.rollNumber
          ) {
            return;
          }

          setStep(3);
        }}
        className="
          rounded-xl
          bg-blue-600
          px-8
          py-3
        "
      >
        Continue
      </button>
    </div>
  </>
)}

            {/* STEP 3 */}

            {step === 3 && (
              <>
                <h2 className="mb-8 text-3xl font-bold">
                  Confirm Registration
                </h2>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-zinc-400">
                    Review your information before submitting your registration.
                  </p>
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      px-8
                      py-3
                    "
                  >
                    Back
                  </button>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="
    rounded-xl
    bg-green-600
    px-8
    py-3
    transition
    hover:bg-green-500
  "
                  >
                    {loading ? "Submitting..." : "Submit Registration"}
                  </button>
                </div>
              </>
            )}
            {/* STEP 4 */}

          {step === 4 && (
  <>
    <Confetti
      recycle={false}
      numberOfPieces={300}
    />

    <div className="flex flex-col items-center text-center">

      <div className="mb-6 rounded-full bg-green-500/20 p-5">
        <CheckCircle2
          size={80}
          className="text-green-400"
        />
      </div>

      <h2 className="text-5xl font-bold">
        Registration Successful
      </h2>

      <p className="mt-4 max-w-xl text-zinc-400">
        Your registration has been recorded successfully.
        A confirmation email containing your event
        details has been sent to your registered
        email address.
      </p>

      <div className="mt-8 w-full max-w-lg rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

        <p className="text-sm uppercase tracking-widest text-green-400">
          Registration ID
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          {registrationId}
        </h3>

      </div>

      <div className="mt-6 w-full max-w-lg rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

        <div className="flex items-center justify-center gap-3">

          <Mail className="text-blue-400" />

          <div className="text-center">
  <p>Confirmation email has been sent</p>

  <p className="mt-1 text-sm text-blue-300">
    {registeredEmail}
  </p>
</div>

        </div>

      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

<a
  href="https://mail.google.com/mail/u/0/#inbox"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-xl
    bg-blue-600
    px-8
    py-3
    transition
    hover:scale-105
    hover:bg-blue-500
  "
>
  Open Gmail
</a>

        <button
          onClick={() => (window.location.href = "/")}
          className="
            flex items-center gap-2
            rounded-xl
            border
            border-white/10
            px-8
            py-3
            transition
            hover:bg-white/5
          "
        >
          <Home size={18} />
          Back To Home
        </button>

      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 max-w-xl">

        <h3 className="mb-4 text-xl font-semibold">
          What's Next?
        </h3>

        <ul className="space-y-3 text-left text-zinc-400">
          <li>✅ Registration saved successfully</li>
          <li>✅ Confirmation email sent</li>
          <li>✅ Event seat reserved</li>
          <li>📅 Event Date: 13 October 2025</li>
          <li>📍 Venue: B-113</li>
          <li>🕔 Time: 5:00 PM</li>
        </ul>

      </div>

    </div>
  </>
)}
          </motion.div>

          {/* EVENT CARD */}

          <div
            className="
              h-fit
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
            "
          >
            <h3 className="text-2xl font-bold">Event Details</h3>

            <div className="mt-6 rounded-2xl bg-blue-600/10 p-4">
              <p className="font-medium text-blue-300">
                🔥 Only 300 Seats Available
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-zinc-500">Date</p>
                <p className="text-lg">13 October 2025</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Time</p>
                <p className="text-lg">5:00 PM</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Venue</p>
                <p className="text-lg">B-113,  KJ Somaiya School Of Engineering</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Expected Audience</p>
                <p className="text-lg">300+ Students</p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-zinc-400">
                Registration confirmation will be shared before the event.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </main>
  );
}
