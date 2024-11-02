import Review from "../models/review.model.js";


export const createReview = async(req, res, next) =>{
    try {
       const listing = await Review.create(req.body);
       return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
};


export const getListingReview = async(req, res, next) => {
    try {
        const reviews = await Review.find({listingId: req.params.listingId })
        .sort({
            createdAt: -1,
        });

        res.status(200).json(reviews);

    } catch (error) {
        next(error);
    }

}