"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose_1 = require("mongoose");
const ReviewsSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
});
const MovieSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        required: true,
    },
    viewCount: {
        type: Number,
        required: true,
    },
    reviews: {
        type: [ReviewsSchema],
        required: true,
    },
});
exports.Movie = (0, mongoose_1.model)('Movie', MovieSchema);
