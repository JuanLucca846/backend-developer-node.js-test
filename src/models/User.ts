import mongoose, { Schema, model } from "mongoose";

export interface userInterface {
  id: string;
  name: string;
  dob: Date;
  address: string;
  description: string;
  createdAt: Date;
}

const userSchema = new mongoose.Schema<userInterface>({
  id: String,
  name: String,
  dob: Date,
  address: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = model<userInterface>("User", userSchema);
