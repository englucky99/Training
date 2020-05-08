const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const projectSchema= new Schema({
    projectIdentifier:{
        type:String,
        required:true
    },
    projectName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    }
});

const Project= mongoose.model("project",projectSchema);

module.exports=Project; 
