import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    birthDate: { type: Date, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    ageGroup: { type: String,
      enum: ['12-14', '15-16', '17-18'], 
      required: true
  }  
}, { timestamps: true });



 const User = mongoose.model('User', userSchema);

 export default User;

