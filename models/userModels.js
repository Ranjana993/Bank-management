import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, min: 5, max: 20 },
  fatherName: { type: String, required: true },
  accountNo: { type: String, required: true },
  cifNo: { type: String, required: true },
  email: { type: String, required: true, trim: true, unique: true, lowercase: true  },
  password: { type: String, required: true },
  uidNo: { type: String, required: true },
  role: { type: Number, default: 0 },
  createdAt:{type:String }

}, { timestamp: true });

const userModel = mongoose.model("users", userSchema);

export default userModel
