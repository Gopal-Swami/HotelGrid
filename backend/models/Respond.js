import mongoose from 'mongoose';

const respondSchema = mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Hotel',
    },
    hotelName: {
      type: String,
      required: true,
    },
    hotelPhotoUrl: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: [true, 'Please Add Valid Message'],
    },
    enquiryMessage: {},
  },
  { timestamps: true }
);

const Respond = mongoose.model('Respond', respondSchema);

export default Respond;
