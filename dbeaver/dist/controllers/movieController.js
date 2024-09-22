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
exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.getMovieById = exports.getMovies = void 0;
const movieService_1 = require("../services/movieService");
const getMovies = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield (0, movieService_1.getAllMoviesService)();
        res.status(200).json(movies);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});
exports.getMovies = getMovies;
const getMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const movie = yield (0, movieService_1.getMovieByIdService)(Number(id));
        if (!movie) {
            res.status(404).json({ message: 'Movie not found' });
        }
        else {
            res.status(200).json(movie);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});
exports.getMovieById = getMovieById;
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, releaseYear, directorID } = req.body;
    try {
        const newMovie = yield (0, movieService_1.createMovieService)({ title, releaseYear, directorID });
        res.status(201).json(newMovie);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});
exports.createMovie = createMovie;
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, releaseYear, directorID } = req.body;
    try {
        const updatedMovie = yield (0, movieService_1.updateMovieService)(Number(id), { title, releaseYear, directorID });
        if (!updatedMovie) {
            res.status(404).json({ message: 'Movie not found' });
        }
        else {
            res.status(200).json(updatedMovie);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});
exports.updateMovie = updateMovie;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const isDeleted = yield (0, movieService_1.deleteMovieService)(Number(id));
        if (!isDeleted) {
            res.status(404).json({ message: 'Movie not found' });
        }
        else {
            res.status(200).json({ message: 'Movie deleted successfully' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});
exports.deleteMovie = deleteMovie;
