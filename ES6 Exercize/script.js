class MyConsole   {
    historyList=[];

    log(value){
        var result = this.calcLog(value);
        console.log('"'+result+'"');
        this.historyList.push(result);
    }
    calcLog(value){
        if(typeof(value)=='object'){
            var arrayOfKeyPairs = Object.keys(value).map( (key)=> {
                return  key + ':' + this.convertToString(value[key]);
            });
            return "{"+ arrayOfKeyPairs.join(',')+"}";
        }  else {
            return this.convertToString(value);
        }  
    }

    history(range=this.historyList.length){
        if(range===this.historyList.length){
            console.log('"'+this.historyList.join('\n')+'"');
        } else {
            console.log('"'+this.historyList.slice(0,range).join('\n')+'"');
        }    
    }

    clearHistory(){
        this.historyList=[];
        console.log(true);
    }

    convertToString(value){
        switch (typeof(value)){
            case 'string':
                return value;
            case 'boolean':
                return "" + value;
            case 'number':
                return "" + value;
            case 'object':
                return this.calcLog(value);
        }
    }
    
}
var myConsole = new MyConsole();
