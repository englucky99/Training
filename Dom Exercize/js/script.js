var projectsObj ={
   projectList: [],    
    addProject:function(projectObj){
      if(projectObj.id){       
        this.projectList.push(projectObj);
      }      
    }
   }

var handlers = {
    addProject: function () {
        var addProjectid = document.getElementById('id');
        var addProjectText = document.getElementById('addProjectText');
        var addProjectDesc = document.getElementById('addProjectDesc');
        var addProjectStatus = document.getElementById('addProjectStatus');
        var projectCheck = document.getElementById('checkResult');
        projectsObj.addProject({id:addProjectid.value,name:addProjectText.value,description:addProjectDesc.value,status:addProjectStatus.value});       
        addProjectText.value = '';
        addProjectid.value = '';
        addProjectDesc.value = '';
        addProjectStatus.value = '';
        projectCheck.innerHTML='';
    },
    displayProjects: function () {
        var projectCheck = document.getElementById('checkResult');
        projectCheck.innerHTML='';
        var projectResult = document.getElementById('result');
        if(projectsObj.projectList.length==0){           
            projectResult.textContent='No record found.';
        } else {
            projectResult.innerHTML=''
            var projectTable = document.createElement('table');
            projectTable.border=1;
            projectTable.innerHTML = '';
            projectsObj.projectList.forEach((val,i)=>{
                var projectTr = document.createElement('tr');    
                for(let prop in val){
                    let projectTd = document.createElement('td');
                    projectTd.textContent=val[prop];
                    projectTr.append(projectTd);
                }
                projectTable.append(projectTr);            
            });
            projectResult.append(projectTable);
        }
               
    },

    checkProject(){
        var table= document.querySelector('table');
        var trcount=0;
        var projectCheck = document.getElementById('checkResult');
        projectCheck.innerHTML='';
        if(table){
          trcount= table.getElementsByTagName('tr').length;
        }
        if(projectsObj.projectList.length==trcount){
            projectCheck.textContent='<tr> is equal to size of project list';
        } else {
            projectCheck.textContent='<tr> is not equal to size of project list';
        }
    }
    
};

