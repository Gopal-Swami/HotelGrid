import express from 'express';
const router = express.Router();
import {
  getHotels,
  getHotelById,
  getTopHotels,
  getUserHotels,
  updateHotel,
  deleteHotel,
  createHotel,
  createHotelReview,
  blockHotel,
} from '../controllers/hotelController.js';
import { protect, admin, owner } from '../middlewares/authMiddleware.js';
import { upload } from '../controllers/fileUploadController.js';

router.route('/').get(getHotels);
router.route('/admin').post(protect, admin, createHotel);
router.route('/owner').post(protect, owner, createHotel);
router.route('/user/:id').get(protect, owner, getUserHotels);
router.route('/:id/reviews').post(protect, createHotelReview);
router.get('/top', getTopHotels);
router.route('/:id').get(getHotelById).delete(protect, admin, deleteHotel);
router
  .route('/:id/admin')
  .put(protect, admin, upload.single('file'), updateHotel);
router
  .route('/:id/owner')
  .put(protect, owner, upload.single('file'), updateHotel);
router.route('/:id/block').put(protect, admin, blockHotel);

export default router;
