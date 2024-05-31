"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRouter = void 0;
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("./movie.controller");
const router = express_1.default.Router();
router.post('/', movie_controller_1.MovieController.createMovie);
router.get('/', movie_controller_1.MovieController.getAllMovie);
router.get('/trending', movie_controller_1.MovieController.getTrendingMovies);
router.get('/:movieId', movie_controller_1.MovieController.getSingleMovie);
router.put('/:movieId', movie_controller_1.MovieController.updateMovie);
router.delete('/:movieId', movie_controller_1.MovieController.deleteSingleMovie);
exports.MovieRouter = router;
