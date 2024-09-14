import { model, Schema } from "mongoose";

const schema=new Schema({
    title: String,
    disc: String
});


//model
 const Movie=model('movie',schema);

 export default Movie;