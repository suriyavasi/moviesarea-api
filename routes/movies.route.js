import express from 'express';
import { MoviesCerate, MoviesDelete, MoviesRead, MoviesUpdate } from '../controllers/movies.controller.js';

const route= express.Router();


// reading movies
route.get("/", MoviesRead);

// creating movies
route.post("/", MoviesCerate);

// updating
route.put("/:id", MoviesUpdate);

// delete
route.delete("/:id", MoviesDelete);


export default route;