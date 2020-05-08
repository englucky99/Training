const projectTaskService = require("./projectTask.service");

module.exports={
    create:(req,res)=>{
        const body= req.body;
        ValidateProjectBody(body,res);    
        projectTaskService.create(body).then(result=>{
            if(result){
                res.json({
                    response:{
                        success:1,
                        message:'ProjectTask created successfully.',
                        data:result
                    }
                    
                })
            } else {
                res.json({
                    response:{                   
                        success:0,
                        message:'Failed to insert data.'
                    }                
                })
            }
            
        }).catch(err=>{
            console.log(err);
            res.json({
                response:{                   
                    success:0,
                    message:'Failed to insert data.'
                }
                               
            });
        })
    },

    getAll:(req,res)=>{     
        const id = req.params.id;   
        projectTaskService.list(id).then(result=>{
            if(result){
                res.json({
                    success:1,
                    message:'Get all projectTasks.',
                    data:result
                })
            } else {
                res.json({
                    success:0,
                    message:'Failed to get data.'                
                })
            }
            
        }).catch(err=>{
            console.log(err);
            res.json({
                success:0,
                message:'Failed to get data.'                
            });
        })
    },

    getProjectTaskById:(req,res)=>{      
        const id = req.params.id; 
        projectTaskService.getProjectTaskById(id).then(result=>{
            if(result){
                res.json({
                    response:{
                        success:1,
                        message:'Get a projects.',
                        data:result
                    }                    
                })
            } else {
                res.json({
                    response:{
                        success:0,
                        message:'Failed to get data.'
                    }
                                    
                })
            }
            
        }).catch(err=>{
            console.log(err);
            res.json({
                response:{
                    success:0,
                    message:'Failed to get data.'
                }
                                
            });
        })
    },
    deleteProject:(req,res)=>{      
        const id = req.params.id; 
        projectTaskService.deleteProject(id).then(result=>{
            if(result){
                res.json({
                    response:{
                        success:1,
                        message:'Delete a projects.',
                        data:result
                    }                    
                })
            } else {
                res.json({
                    response:{
                        success:0,
                        message:'Failed to delete data.'
                    }
                                    
                })
            }
            
        }).catch(err=>{
            console.log(err);
            res.json({
                response:{
                    success:0,
                    message:'Failed to delete data.'
                }
                                
            });
        })
    },
    updateProjectTask:(req,res)=>{      
        const id = req.params.id;
        const body = req.body 
        ValidateProjectBody(body,res);
        projectTaskService.updateProjectTask(id,body).then(result=>{
            if(result){
                res.json({
                    response:{
                        success:1,
                        message:'update a projects.',
                        data:result
                    }
                    
                })
            } else {
                res.json({
                    response:{
                        success:0,
                        message:'Failed to update data.'
                    }
                                    
                })
            }
            
        }).catch(err=>{
            console.log(err);
            res.json({
                response:{
                    success:0,
                    message:'Failed to update data.'
                }                                
            });
        })
    }
}

function ValidateProjectBody(body,res){
    if(!body){
        res.json({
            response:{    
                data:{
                    projectName: "Project name is required.",
                    projectIdentifier: "Project Identifier is required. ",
                    description: "Description is required. ",
                    startDate: "Start date is required ",
                    endDate: "End date is required. ",
                },             
                success:0,
                message:'Failed to insert data.'
            }
        })
    } else  {
        var errorObj ={};
        let count =0;
        for(const [key,value] of Object.entries(body)){
            if(value.trim()==''){
                errorObj[key]=key+' is required';
                count++;
            }
        }
        if(count>0){
            res.json({
                response:{    
                    data:errorObj,             
                    success:0,
                    message:'Failed to insert data.'
                }
            })
        }        
    }
}