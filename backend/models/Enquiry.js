import mongoose from 'mongoose';

const enquirySchema = mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Hotel',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    username: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    message: {
      type: String,
      required: [true, 'Please Add Valid Message'],
    },
    isResponded: {
      type: Boolean,
      default: false,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    response: {
      type: String,
      required: [true, 'Please Add Valid Message'],
    },
  },
  { timestamps: true }
);

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;
