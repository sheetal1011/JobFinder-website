import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['jobseeker', 'recruiter'],
    default: 'jobseeker'
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;
