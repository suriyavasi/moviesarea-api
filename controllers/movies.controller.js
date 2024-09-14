export const MoviesRead=(req,res)=>{
    res.send('read movies');
 };

 export const MoviesCerate=(req,res)=>{
    
    console.log(req.body);

    return res.json(req.body);
    
};

export const MoviesUpdate=(req,res)=>{
    res.send("update movies");
};

export const MoviesDelete=(req,res)=>{
    res.send('delete movies');
};

