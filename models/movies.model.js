import { model, Schema } from "mongoose";
import { type } from "os";

const schema=new Schema({
    title: {
        type:String,
        require:true,
        unique:true
    },
    disc:{
        type: String,
        require: true,
        unique:true
    }
});


//model
 const Movie=model('movie',schema);

 export default Movie;