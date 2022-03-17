import asyncHandler from 'express-async-handler';
import Hotel from '../models/Hotel.js';
import Booking from '../models/Booking.js';
import User from '../models/User.js';
import Notification from '../models/Notification.js';

// @desc fetch all Bookings
// @route GET api/v1/bookings
// @access private Admin only

const getBookings = asyncHandler(async (req, res) => {
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

  const count = await Booking.countDocuments({ ...keyword });
  const bookings = await Booking.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ bookings, page, pages: Math.ceil(count / pageSize) });
});

// @desc fetch single Booking
// @route GET api/v1/bookings/:id
// @access Private User Or Admin and Owner
const getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (booking) {
    res.json(booking);
  } else {
    res.status(404);
    throw new Error('Booking not found');
  }
});

// @desc fetch  bookings by Owner
// @route GET api/v1/bookings/user/:id
// @access private owner
const getOwnerBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ hotelOwner: req.params.id });
  if (bookings) {
    res.json(bookings);
  } else {
    res.status(404);
    throw new Error('Bookings not found');
  }
});

// @desc fetch  bookings by user
// @route GET api/v1/bookings/user/:id
// @access private owner
const getUserBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.params.id });
  if (bookings) {
    res.json(bookings);
  } else {
    res.status(404);
    throw new Error('Bookings not found');
  }
});

// @desc delete single Booking
// @route DELETE api/v1/bookings/:id
// @access Private / Admin
const deleteBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (booking) {
    await booking.remove();
    res.json({ message: 'Booking Deleted' });
  } else {
    res.status(404);
    throw new Error('Hotel not found');
  }
});

// @desc create single booking
// @route POST api/v1/bookings
// @access Private / Admin / Owners
const createBooking = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.body.hotelId);

  const booking = new Booking({
    user: req.user._id,
    hotelOwner: hotel.user,
    hotel: hotel._id,
    hotelName: hotel.hotelName,
    hotelPhotoUrl: hotel.hotelPhotoUrl,
    roomType: req.body.roomType,
    noOfRooms: req.body.noOfRooms,
    hotelAddress: hotel.address,
    paymentMethod: req.body.paymentMethod,
    taxPrice: req.body.taxPrice,
    totalPrice: req.body.totalPrice,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
  });

  const notificationOfBooking = new Notification({
    sender: req.body.hotelId,
    senderImage: hotel.hotelPhotoUrl,
    receiver: req.user._id,
    message: {
      subject: 'Booking Created Successfully',
      message: `Greetings From ${hotel.hotelName} !
      Dear ${req.user.firstName} ${req.user.lastName}
      Your Booking has created on ${Date.now()}.
      Please complete the payment to confirm your arrival on our doors.
      Regards,
      ${hotel.hotelName}
      `,
    },
  });
  const notificationSent = await notificationOfBooking.save();
  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
});

// @desc payment update booking
// @route PUT api/v1/bookings/payment/:id
// @access Private

const updatePayment = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  const hotel = await Hotel.findById(booking.hotel);
  if (booking && !booking.isPaid) {
    booking.isPaid = true;
    booking.paidAt = Date.now();
    booking.paymentMethod = req.body.paymentMethod;
    booking.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    booking.booked = true;
    const notificationOfBooking = new Notification({
      sender: hotel._id,
      senderImage: hotel.hotelPhotoUrl,
      receiver: req.user._id,
      message: {
        subject: 'Hurree Booking Confirmed',
        message: `Greetings From ${hotel.hotelName} !
        Dear ${req.user.firstName} ${req.user.lastName}
        Your payment was successful for Rupeee ${booking.totalPrice} via ${req.body.paymentMethod}.
        Your Booking has confirmed.
        Regards,
        ${hotel.hotelName}
        `,
      },
    });
    const notificationSent = await notificationOfBooking.save();
    const updatedBooking = await booking.save();
    res.status(201).json(updatedBooking);
  } else {
    res.status(404);
    throw new Error('Booking not found');
  }
});

// @desc update checkin status of booking
// @route PUT api/v1/bookings/checkin/:id
// @access Private owner
const updateCheckInStatus = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (booking) {
    booking.isCheckedIn = true;
    const updatedBooking = await booking.save();
    res.status(201).json(updatedBooking);
  } else {
    res.status(404);
    throw new Error('Booking Not Found');
  }
});

// @desc update check out status of booking
// @route PUT api/v1/bookings/checkout/:id
// @access Private
const updateCheckOutStatus = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (booking) {
    booking.isCheckedOut = true;
    const updatedBooking = await booking.save();
    res.status(201).json(updatedBooking);
  } else {
    res.status(404);
    throw new Error('Booking Not Found');
  }
});

// @desc update refund status of booking
// @route PUT api/v1/bookings/refund/:id
// @access Owner
const updateRefundStatus = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  const hotel = await Hotel.findById(booking.hotel);
  const user = await User.findById(booking.user);

  if (booking) {
    booking.isRefundCompleted = true;
    const notificationOfBooking = new Notification({
      sender: hotel._id,
      senderImage: hotel.hotelPhotoUrl,
      receiver: booking.user,
      message: {
        subject: 'Refund Processed :)',
        message: `
        Dear ${user.firstName} ${user.lastName}
        Your refund has processed for Rupeee ${booking.totalPrice}.
        
        We look forward to see you soon :)
        Regards,
        ${hotel.hotelName}
        `,
      },
    });
    const notificationSent = await notificationOfBooking.save();
    const updatedBooking = await booking.save();
    res.status(201).json(updatedBooking);
  } else {
    res.status(404);
    throw new Error('Booking Not Found');
  }
});

// @desc cancel booking
// @route PUT api/v1/bookings/cancel/:id
// @access Private
const cancelBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  const hotel = await Hotel.findById(booking.hotel);

  if (booking) {
    booking.isCancelled = true;

    const notificationOfBooking = new Notification({
      sender: hotel._id,
      senderImage: hotel.hotelPhotoUrl,
      receiver: req.user._id,
      message: {
        subject: 'Booking Cancelled',
        message: `
        Dear ${req.user.firstName} ${req.user.lastName}
        Your boking has cancelled and your refund will be credited within 2 Days.
        Refund Ammount : ${booking.totalPrice}.
        
        Will miss you :( 
        ${hotel.hotelName}
        `,
      },
    });
    const notificationSent = await notificationOfBooking.save();
    const updatedBooking = await booking.save();
    res.status(201).json(updatedBooking);
  } else {
    res.status(404);
    throw new Error('Booking Not Found');
  }
});

export {
  getBookings,
  getBookingById,
  getOwnerBookings,
  getUserBookings,
  createBooking,
  updatePayment,
  updateCheckInStatus,
  updateCheckOutStatus,
  updateRefundStatus,
  cancelBooking,
  deleteBooking,
};
