import express from 'express';


const app=express();
const PORT=8000;


app.get("/", (req,res)=>{
    res.json({msg:"hello suriya"})
});

app.listen(PORT,()=>{
    console.log(`the port is running successful http://localhost:$(PORT)`);
    
});
