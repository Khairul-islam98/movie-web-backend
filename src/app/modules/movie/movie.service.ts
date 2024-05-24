import { TMovie } from './movie.inteface';
import { Movie } from './movie.model';

const createMovieIntoDB = async (payload: TMovie) => {
  const result = await Movie.create(payload);
  return result;
};

const getAllMovieFromDB = async (searchTerm?: string) => {
  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'i');
    const result = await Movie.find({
      $or: [
        { title: { $regex: regex } },
        { description: { $regex: regex } },
        { genre: { $regex: regex } },
      ],
    });
    return result;
  } else {
    return Movie.find();
  }
};
const getSingleMovieFromDB = async (id: string) => {
  const result = await Movie.findById({ _id: id });
  return result;
};

const updateSingleMovieFromDB = async (id: string, payload: TMovie) => {
  const result = await Movie.findOneAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true },
  );
  return result;
};
const deleteSingleMovieFromDB = async (id: string) => {
  const result = await Movie.findOneAndDelete({ _id: id });
  return result;
};
export const MovieService = {
  createMovieIntoDB,
  getAllMovieFromDB,
  getSingleMovieFromDB,
  updateSingleMovieFromDB,
  deleteSingleMovieFromDB,
};
