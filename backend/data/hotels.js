const hotels = [
  {
    userId: '100001',
    hotelName: 'New Node React Hotel',
    hotelDescription:
      'This is a cool Node React Hotel with full functionalities of express',
    address: {
      addressline1: 'New Express Street',
      city: 'Kolkata',
      postalCode: '123456',
      state: 'West Bengal',
      country: 'India',
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
];
