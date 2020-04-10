var project = {
    
    id:1,
    name:'Project1',
    description:'project1 description',
    status:'Complete',
    //status:'In Progress',
    CheckCompleted:function(){
        if(this.status.toLowerCase()==='complete'){
            return true;
        } else {
            return false;
        }
    }

}

var view={
    CheckCompleted: function(){
        var resultEle= document.getElementById('result');
       
            var isCompelete= project.CheckCompleted();
            if(isCompelete){
                resultEle.textContent="Project has completed.";
            } else {
                resultEle.textContent="Project is in progress.";
            }
      
    }
}