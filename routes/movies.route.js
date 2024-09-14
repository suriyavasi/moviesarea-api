import express from 'express';

const route= express.Router();


// reading movies
route.get("/",(req,res)=>{
   res.send('read movies');
});

// creating movies
route.post("/",(req,res)=>{
    res.send('create movies');
});

// updating
route.put("/:id",(req,res)=>{
    res.send("update movies");
});

// delete
route.delete("/:id",(req,res)=>{
    res.send('delete movies');
});


export default route;