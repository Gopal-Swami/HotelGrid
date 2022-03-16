import express from 'express';
const router = express.Router();
import {
  getBookings,
  getBookingById,
  getOwnerBookings,
  createBooking,
} from '../controllers/bookingController.js';
import { protect, admin, owner } from '../middlewares/authMiddleware.js';

router.route('/').get(getBookings).post(protect, createBooking);
router.route('/:id').get(protect, getBookingById);
router.route('/user/:id').get(protect, owner, getOwnerBookings);
export default router;
