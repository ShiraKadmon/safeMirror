import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  birthDate: { type: Date, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true}
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

export default User;
