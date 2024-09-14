import express from 'express';
import Moviesroute from './routes/movies.route.js';
import connectDB from './database/db.js';


const app=express();
const PORT=8000;

//data understanding
app.use(express.json())
app.use(express.urlencoded({extended:true}))
 //database connection
 connectDB()

app.get("/", (req,res)=>{
    res.json({msg:"hello suriya"})
});

//crud operation
app.use("/movies",Moviesroute)




app.listen(PORT,()=>{
    console.log(`the port is running successful http://localhost:${PORT}`);
    
});
