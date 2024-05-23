import { Schema, model } from 'mongoose';
import { TMovie, TReview } from './movie.inteface';

const ReviewsSchema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const MovieSchema = new Schema<TMovie>({
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

export const Movie = model<TMovie>('Movie', MovieSchema);
