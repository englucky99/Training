const projectTaskModel = require("./projectTask.model");

module.exports={
    create :(data)=>{
        return projectTaskModel.create(data);        
    },
    list :(projectId)=>{        
        return projectTaskModel.find({projectId:projectId});        
    },
    getProjectTaskById:(id)=>{
        return projectTaskModel.findById(id);
    },
    updateProjectTask:(id,data)=>{
        return projectTaskModel.findByIdAndUpdate(id,data);
    },
    deleteProject:id=>{
        return projectTaskModel.deleteOne({_id:id});
    }
}

