import mongoose from 'mongoose';

const enquirySchema = mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Hotel',
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
  },
  { timestamps: true }
);

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;
