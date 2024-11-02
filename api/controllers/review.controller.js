import Review from "../models/review.model.js";


export const createReview = async(req, res, next) =>{
    try {
       const listing = await Review.create(req.body);
       return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
};