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
exports.MovieService = void 0;
const movie_model_1 = require("./movie.model");
const createMovieIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.Movie.create(payload);
    return result;
});
const getAllMovieFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const regex = new RegExp(searchTerm, 'i');
        const result = yield movie_model_1.Movie.find({
            $or: [
                { title: { $regex: regex } },
                { description: { $regex: regex } },
                { genre: { $regex: regex } },
            ],
        });
        return result;
    }
    else {
        return movie_model_1.Movie.find();
    }
});
const getSingleMovieFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.Movie.findById({ _id: id });
    return result;
});
const updateSingleMovieFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.Movie.findOneAndUpdate({ _id: id }, { $set: payload }, { new: true });
    return result;
});
const deleteSingleMovieFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.Movie.findOneAndDelete({ _id: id });
    return result;
});
const getTrendingMoviesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.Movie.find({ viewCount: { $gt: 5 } });
    return result;
});
exports.MovieService = {
    createMovieIntoDB,
    getAllMovieFromDB,
    getSingleMovieFromDB,
    updateSingleMovieFromDB,
    deleteSingleMovieFromDB,
    getTrendingMoviesFromDB,
};
