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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovieService = exports.updateMovieService = exports.createMovieService = exports.getMovieByIdService = exports.getAllMoviesService = void 0;
const db_1 = __importDefault(require("../config/db"));
const getAllMoviesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('SELECT * FROM Movies');
    return result.rows;
});
exports.getAllMoviesService = getAllMoviesService;
const getMovieByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('SELECT * FROM Movies WHERE MovieID = $1', [id]);
    if (result.rows.length === 0) {
        return null;
    }
    return result.rows[0];
});
exports.getMovieByIdService = getMovieByIdService;
const createMovieService = (movie) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, releaseYear, directorID } = movie;
    const result = yield db_1.default.query('INSERT INTO Movies (Title, ReleaseYear, DirectorID) VALUES ($1, $2, $3) RETURNING *', [title, releaseYear, directorID]);
    return result.rows[0];
});
exports.createMovieService = createMovieService;
const updateMovieService = (id, movie) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, releaseYear, directorID } = movie;
    const result = yield db_1.default.query('UPDATE Movies SET Title = $1, ReleaseYear = $2, DirectorID = $3 WHERE MovieID = $4 RETURNING *', [title, releaseYear, directorID, id]);
    if (result.rows.length === 0) {
        return null;
    }
    return result.rows[0];
});
exports.updateMovieService = updateMovieService;
const deleteMovieService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('DELETE FROM Movies WHERE MovieID = $1 RETURNING *', [id]);
    return result.rows.length > 0;
});
exports.deleteMovieService = deleteMovieService;
