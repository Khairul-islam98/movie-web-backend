"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const movie_service_1 = require("./movie.service");
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movie_service_1.MovieService.createMovieIntoDB(req.body);
        res.status(200).json({
            success: true,
            message: 'Movie created successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'some thing went wrong',
            error: err,
        });
    }
});
const getAllMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const searchQuery = searchTerm;
        const result = yield movie_service_1.MovieService.getAllMovieFromDB(searchQuery);
        res.status(200).json({
            success: true,
            message: 'Movies fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'some thing went wrong',
            error: err,
        });
    }
});
const getSingleMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId } = req.params;
        const result = yield movie_service_1.MovieService.getSingleMovieFromDB(movieId);
        res.status(200).json({
            success: true,
            message: 'Movie fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'some thing went wrong',
            error: err,
        });
    }
});
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId } = req.params;
        const payload = req.body;
        const result = yield movie_service_1.MovieService.updateSingleMovieFromDB(movieId, payload);
        res.status(200).json({
            success: true,
            message: 'Movie Update successfully!',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'some thing went wrong',
            error: err,
        });
    }
});
const deleteSingleMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId } = req.params;
        const result = yield movie_service_1.MovieService.deleteSingleMovieFromDB(movieId);
        res.status(200).json({
            success: true,
            message: 'Movie deleted successfully!',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'some thing went wrong',
            error: err,
        });
    }
});
const getTrendingMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movie_service_1.MovieService.getTrendingMoviesFromDB();
        res.status(200).json({
            success: true,
            message: 'Trending movies fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
});
exports.MovieController = {
    createMovie,
    getAllMovie,
    getSingleMovie,
    updateMovie,
    deleteSingleMovie,
    getTrendingMovies,
};
