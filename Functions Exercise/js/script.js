var projectsObj ={
   projectList: [
        {
            pid: 1,
            pname: 'Project1',        
            status: 'In Progress',
        },
        {
            pid: 2,
            pname: 'Project2',        
            status: 'Complete',
        }
    ],
    idCounter:2,
    addProject:function(name){
      if(name){
        this.idCounter++;
        this.projectList.push({pid:this.idCounter,pname:name,status:'In Progress'});
      }      
    },
    deleteProject: function (position) {
        this.projectList.splice(position, 1);

    },
    makeComplete: function (position) {
        var project = this.projectList[position];
        project.status = 'Complete';

    }
}

var handlers = {
    addProject: function () {
        var addProjectText = document.getElementById('addProjectText');
        projectsObj.addProject(addProjectText.value);
        view.displayProjects();
        addProjectText.value = '';
    },
 
    deleteProject: function (id) {
        var index= projectsObj.projectList.findIndex(function(project){
            return project.pid===parseInt(id);
        });
        if(index>-1){
            projectsObj.deleteProject(index);
            view.displayProjects();
        }
        
    },
    makeComplete: function (id) {   
        var index= projectsObj.projectList.findIndex(function(project){
            return project.pid===parseInt(id);
        });
        if(index>-1){
            projectsObj.makeComplete(index);
            view.displayProjects();   
        }    
          
    }
};

var view = {
    displayProjects: function () {
        var projectUl = document.querySelector('ul');
        projectUl.innerHTML = '';

        for (var i = 0; i < projectsObj.projectList.length; i++) {
            var projectLi = document.createElement('li');
            var project = projectsObj.projectList[i];
            var projectName = '';
            if (project.status.toLocaleLowerCase() === 'complete') {
                projectName = '(Complete) ' + project.pname;
            }
            else {
                projectName = '(In Progress) ' + project.pname;
            }
            projectLi.id = project.pid;
            projectLi.textContent = projectName;
            projectLi.appendChild(this.createDeleteButton()); // call createDeleteButton and appending as a child node in issueList
            if (project.status.toLocaleLowerCase() !== 'complete') {
                projectLi.appendChild(this.createCompleteButton());
            }
            
            projectUl.appendChild(projectLi);
        }

    },
    createDeleteButton: function () {
        var deleteButton;
        deleteButton = document.createElement('div');
        var deleteContent =document.createElement('p');
        deleteContent.textContent = 'X';
        deleteButton.className = 'deleteProject';
        deleteButton.append(deleteContent);
        return deleteButton;
    },
    createCompleteButton: function () {
        var EditButton;
        EditButton = document.createElement('div');
        var EditContent =document.createElement('p');
        EditContent.textContent = 'Click here to complete';
        EditButton.className = 'EditProject';
        EditButton.append(EditContent);
        return EditButton;
    },

    setUpEventListener: function () {
        this.displayProjects();
        var projectUl = document.querySelector('ul');
        projectUl.addEventListener('click', function (event) {
            var elementClicked = event.target.parentNode;
            if (elementClicked.className === 'deleteProject') {
                handlers.deleteProject(parseInt(elementClicked.parentNode.id));
            }
            if (elementClicked.className === 'EditProject') {
                handlers.makeComplete(parseInt(elementClicked.parentNode.id));
                issueItemLi.textContent='   ';
                issueItemLi.appendChild(view.createDeleteButton());               
            }                         
        });
    }
};

view.setUpEventListener();