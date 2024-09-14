import Movie from "../models/movies.model.js";

export const MoviesRead=(req,res)=>{
    res.send('read movies');
 };

 export const MoviesCerate=async(req,res)=>{

   const Newmovie = new Movie({
        title:req.body.title,
        disc:req.body.disc
    })

    

    try {
        const moviess=await Newmovie.save();
        return res.status(201).json(moviess)
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
    
};

export const MoviesUpdate=(req,res)=>{
    res.send("update movies");
};

export const MoviesDelete=(req,res)=>{
    res.send('delete movies');
};

