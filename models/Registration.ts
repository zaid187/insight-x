import mongoose, { Schema, models, model } from "mongoose";

const RegistrationSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
  type: String,
  required: true,
  unique: true,
},

    phone: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },

    rollNumber: {
  type: String,
  required: true,
  unique: true,
    },
    registrationId: {
  type: String,
  required: true,
  unique: true,
},
  },
  {
    timestamps: true,
  }
);

const Registration =
  models.Registration ||
  model("Registration", RegistrationSchema);

export default Registration;