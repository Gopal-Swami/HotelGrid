import express from 'express';
const router = express.Router();
import {
  getBookings,
  getBookingById,
  getOwnerBookings,
  createBooking,
  getUserBookings,
  updatePayment,
  updateCheckInStatus,
  updateCheckOutStatus,
  updateRefundStatus,
  cancelBooking,
  deleteBooking,
} from '../controllers/bookingController.js';
import { protect, admin, owner } from '../middlewares/authMiddleware.js';

router.route('/').get(protect, admin, getBookings).post(protect, createBooking);
router.route('/:id').get(protect, getBookingById);
router.route('/payment/:id').put(protect, updatePayment);
router.route('/checkin/:id').put(protect, owner, updateCheckInStatus);
router.route('/checkout/:id').put(protect, owner, updateCheckOutStatus);
router.route('/refund/:id').put(protect, owner, updateRefundStatus);
router.route('/cancel/:id').put(protect, cancelBooking);
router.route('/:id').delete(protect, admin, deleteBooking);
router.route('/owner/:id').get(protect, owner, getOwnerBookings);
router.route('/user/:id').get(protect, getUserBookings);
export default router;
