import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    listingId: {
        type: String,
        required: true,
    },
    userRef: {
        type: String,
        required: true,
    },
    likes: {
        type: Array,
        default: [],
    },
    numberOfLikes: {
        type: Number,
        default: 0
    },
    
},
{timestamps: true});

const Review = mongoose.model('Review', reviewSchema);

export default Review;