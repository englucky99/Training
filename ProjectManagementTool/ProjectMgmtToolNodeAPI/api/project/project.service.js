const projectModel = require("./project.model");

module.exports={
    create :(data)=>{
        return projectModel.create(data);        
    },
    list :()=>{
        return projectModel.find();        
    },
    getProjectById:(id)=>{
        return projectModel.findById(id);
    },
    updateProject:(id,data)=>{
        return projectModel.findByIdAndUpdate(id,data);
    },
    deleteProject:id=>{
        return projectModel.deleteOne({_id:id});
    }
}

