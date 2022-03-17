import express from 'express';
const router = express.Router();
import {
  getEnquiries,
  getEnquiryById,
  getResponds,
  getRespondById,
  createEnquiry,
  createRespond,
  deleteRespondById,
} from '../controllers/enquiryController.js';
import { protect, owner } from '../middlewares/authMiddleware.js';

router.route('/').get(protect, owner, getEnquiries);
router.route('/').post(createEnquiry);
router.route('/:id').get(protect, owner, getEnquiryById);
router.route('/responds/:id').get(protect, owner, getResponds);
router.route('/:id').delete(protect, owner, deleteRespondById);
router.route('/responds/sent/:id').get(protect, owner, getRespondById);
router.route('/:id/respond').post(protect, owner, createRespond);

export default router;
