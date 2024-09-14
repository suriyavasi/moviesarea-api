import express from 'express';

const route=express.Router();


// reading movies
route.get("/movies",()=>{})

// creating movies
route.post("/movies",()=>{})

// updating
route.put("/movies",()=>{})

// delete
route.delete("/movies",()=>{})


export default route;