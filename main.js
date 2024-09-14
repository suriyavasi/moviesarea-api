import express from 'express';
import Moviesroute from './routes/movies.route.js';


const app=express();
const PORT=8000;


app.get("/", (req,res)=>{
    res.json({msg:"hello suriya"})
});

//crud operation
app.use("/movies",Moviesroute)




app.listen(PORT,()=>{
    console.log(`the port is running successful http://localhost:${PORT}`);
    
});
