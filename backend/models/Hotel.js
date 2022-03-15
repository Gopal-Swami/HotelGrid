import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const hotelSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    hotelName: {
      type: String,
      required: [true, 'Please Provide Valid Hotel Name'],
      unique: true,
    },
    hotelDescription: {
      type: String,
      required: [true, 'Please Provide Valid Hotel Description'],
    },
    address: {
      addressline1: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    hotelPhotoUrl: {
      type: String,
      default: '',
    },
    availability: [
      {
        type: { type: String, required: true },
        rooms: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
