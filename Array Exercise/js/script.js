var projectsObj ={
   projectList: [
        {
            id: 1,
            name: 'Project1',        
            description: 'project1 description',
        },
        {
            id: 2,
            name: 'Project2',
            description: 'project2 description',
        },
        {
            id: 3,
            name: 'Project3',
            description: 'project3 description',
        },
        {
            id: 4,
            name: 'Project4',
            description: 'project4 description',
        }
    ],
    findProject:function(id){
        var project= this.projectList.find(function(project){
            return project.id===parseInt(id);
        })
        return project;
    }
}
var view = {
    findProject: function () {
        var resultEle = document.getElementById('result');
        var id = document.getElementById('projectId').value;
        if (id) {
            var project = projectsObj.findProject(id);
            if (project.id) {
                resultEle.innerHTML = "<p>Name: "+project.name+"</p><p>Description: "+project.description+"</p>";
            } else {
                resultEle.textContent = "No match found.";
            }
        } else {
            resultEle.textContent = "No match found.";
        }
    }
}