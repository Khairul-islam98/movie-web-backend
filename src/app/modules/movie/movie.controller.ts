import { Request, Response } from 'express';
import { MovieService } from './movie.service';

const createMovie = async (req: Request, res: Response) => {
  try {
    const result = await MovieService.createMovieIntoDB(req.body);
    res.status(200).json({
      success: true,
      message: 'Movie created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'some thing went wrong',
      error: err,
    });
  }
};

const getAllMovie = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const searchQuery = searchTerm as string;
    const result = await MovieService.getAllMovieFromDB(searchQuery);
    res.status(200).json({
      success: true,
      message: 'Movies fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'some thing went wrong',
      error: err,
    });
  }
};
const getSingleMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const result = await MovieService.getSingleMovieFromDB(movieId);
    res.status(200).json({
      success: true,
      message: 'Movie fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'some thing went wrong',
      error: err,
    });
  }
};
const updateMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const payload = req.body;
    const result = await MovieService.updateSingleMovieFromDB(movieId, payload);
    res.status(200).json({
      success: true,
      message: 'Movie Update successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'some thing went wrong',
      error: err,
    });
  }
};
const deleteSingleMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const result = await MovieService.deleteSingleMovieFromDB(movieId);
    res.status(200).json({
      success: true,
      message: 'Movie deleted successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'some thing went wrong',
      error: err,
    });
  }
};
const getTrendingMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieService.getTrendingMoviesFromDB();
    res.status(200).json({
      success: true,
      message: 'Trending movies fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const MovieController = {
  createMovie,
  getAllMovie,
  getSingleMovie,
  updateMovie,
  deleteSingleMovie,
  getTrendingMovies,
};
