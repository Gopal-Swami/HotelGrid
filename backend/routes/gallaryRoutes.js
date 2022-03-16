import express from 'express';
const router = express.Router();
import {
  createGallaryImage,
  updateGallaryImage,
  deleteGallaryImage,
} from '../controllers/gallaryController.js';
import { protect, admin, owner } from '../middlewares/authMiddleware.js';
import { upload } from '../controllers/fileUploadController.js';

router
  .route('/:id')
  .post(protect, admin, upload.single('file'), createGallaryImage)
  .put(protect, admin, upload.single('file'), updateGallaryImage)
  .delete(protect, admin, upload.single('file'), deleteGallaryImage);

router
  .route('/:id')
  .post(protect, owner, upload.single('file'), createGallaryImage)
  .put(protect, owner, upload.single('file'), updateGallaryImage)
  .delete(protect, owner, upload.single('file'), deleteGallaryImage);

export default router;
