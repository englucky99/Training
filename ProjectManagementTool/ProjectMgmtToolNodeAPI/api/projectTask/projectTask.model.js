const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const projectTaskSchema= new Schema({
    summary:{
        type:String,
        required:true
    },
    acceptanceCriteria:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    },
    updatedAt:{
        type:String,
        required:true
    },
    projectId:{
        type:String,
        required:true
    }
});

const ProjectTask= mongoose.model("projectTask",projectTaskSchema);

module.exports=ProjectTask; 
