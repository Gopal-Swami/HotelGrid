import express from 'express';
import asyncHandler from 'express-async-handler';
import {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';
import { upload } from '../controllers/fileUploadController.js';

const router = express.Router();

router
  .route('/')
  .post(upload.single('file'), registerUser)
  .get(protect, admin, getUsers);
router.post('/login', upload.single('file'), loginUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, upload.single('file'), updateUserProfile);

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, upload.single('file'), updateUser);

export default router;
