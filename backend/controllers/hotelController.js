import asyncHandler from 'express-async-handler';
import Hotel from '../models/Hotel.js';
import User from '../models/User.js';

// @desc fetch all Hotels
// @route GET api/v1/hotels
// @access public

const getHotels = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        hotelName: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Hotel.countDocuments({ ...keyword });
  const hotels = await Hotel.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ hotels, page, pages: Math.ceil(count / pageSize) });
});

// @desc fetch single hotel
// @route GET api/v1/hotels/:id
// @access public
const getHotelById = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);

  if (hotel) {
    res.json(hotel);
  } else {
    res.status(404);
    throw new Error('Hotel not found');
  }
});

// @desc fetch  hotels by Owner
// @route GET api/v1/hotels/user/:id
// @access private
const getUserHotels = asyncHandler(async (req, res) => {
  const hotels = await Hotel.find({ user: req.params.id });
  if (hotels) {
    res.json(hotels);
  } else {
    res.status(404);
    throw new Error('Hotels not found');
  }
});

// @desc delete single hotel
// @route DELETE api/v1/hotels/:id
// @access Private / Admin
const deleteHotel = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);

  if (hotel) {
    await hotel.remove();
    res.json({ message: 'Hotel Deleted' });
  } else {
    res.status(404);
    throw new Error('Hotel not found');
  }
});

// @desc create single hotel
// @route POST api/v1/hotels
// @access Private / Admin / Owners
const createHotel = asyncHandler(async (req, res) => {
  const hotel = new Hotel({
    user: req.user._id,
    hotelName: 'New Sample Hotel',
    hotelDescription: 'Sample Description',
    address: {
      addressline1: 'Street',
      city: 'City',
      postalCode: 'Postal Code',
      state: 'State',
      country: 'India',
    },
    availability: [
      {
        type: 'Single',
        rooms: 0,
        price: 0,
      },
      {
        type: 'Double',
        rooms: 0,
        price: 0,
      },
      {
        type: 'Tripple',
        rooms: 0,
        price: 0,
      },
      {
        type: 'Luxury',
        rooms: 0,
        price: 0,
      },
    ],
    isBlocked: true,
  });

  const createdHotel = await hotel.save();
  res.status(201).json(createdHotel);
});

// @desc update single hotel
// @route PUT api/v1/hotels/:id
// @access Private / Owners
const updateHotel = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);

  if (hotel) {
    hotel.hotelName = req.body.hotelName || hotel.hotelName;
    hotel.hotelDescription =
      req.body.hotelDescription || hotel.hotelDescription;
    hotel.address = req.body.address || hotel.address;
    hotel.availability = req.body.availability || hotel.availability;
    const updatedHotel = await hotel.save();
    res.json(updatedHotel);
  } else {
    res.status(404);
    throw new Error('Hotel Not Found');
  }
});

// @desc block single hotel
// @route PUT api/v1/hotels/:id/block
// @access Private / Admin
const blockHotel = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);

  if (hotel) {
    hotel.isBlocked = req.body.blockStatus;
    const updatedHotel = await hotel.save();
    res.json(updatedHotel);
  } else {
    res.status(404);
    throw new Error('Hotel Not Found');
  }
});

// @desc Create new Review
// @route POST api/v1/hotels/:id/reviews
// @access Private
const createHotelReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const hotel = await Hotel.findById(req.params.id);

  if (hotel) {
    const alreadyReviewed = hotel.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Hotel Already Reviewed');
    }

    const review = {
      name: req.user.username,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    hotel.reviews.push(review);

    hotel.rating =
      hotel.reviews.reduce((acc, item) => item.rating + acc, 0) /
      hotel.reviews.length;

    await hotel.save();
    res.status(201).json({ message: 'Review Added' });
  } else {
    res.status(404);
    throw new Error('Hotel Not Found');
  }
});

// @desc Get Top 3 Hotels
// @route GET api/v1/hotels/top
// @access Public
const getTopHotels = asyncHandler(async (req, res) => {
  const hotels = await Hotel.find({}).sort({ rating: -1 }).limit(3);
  res.json(hotels);
});

export {
  getHotels,
  getHotelById,
  getTopHotels,
  updateHotel,
  createHotel,
  createHotelReview,
  deleteHotel,
  blockHotel,
  getUserHotels,
};
