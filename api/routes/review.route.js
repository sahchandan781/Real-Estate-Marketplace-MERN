import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createReview, getListingReview } from '../controllers/review.controller.js';

const router = express.Router();

router.post('/createreview',verifyToken, createReview);
router.get('/getListingReview/:listingId',  getListingReview);

export default router;