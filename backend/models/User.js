import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please Provide Valid First Name'],
      maxLength: [60, 'First Name Length Cannot exceed 60'],
    },
    lastName: {
      type: String,
      required: [true, 'Please Provide Valid Last Name'],
      maxLength: [60, 'Last Name Length Cannot exceed 60'],
    },
    email: {
      type: String,
      required: [true, 'Please Provide Valid Email'],
      maxLength: [80, 'Email Length Cannot exceed 80'],
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: [true, 'Please Provide Valid Phone No'],
      maxLength: [10, 'Phone No Length Cannot exceed 10'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please Provide Valid Password'],
    },
    profileUrl: {
      type: String,
      default: '',
    },
    address: {
      addressline1: { type: String },
      city: { type: String },
      postalCode: { type: String },
      state: { type: String },
      country: { type: String },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isOwner: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.model('User', userSchema);

export default User;
