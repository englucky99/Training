var operations = {
    checkPrime: function (number) {
        if (number === 1) {
            return false;
        }
        else if (number === 2) {
            return true;
        } else {
            for (var i = 2; i < number; i++) {
                if (number % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }
}

var view={
    checkPrime: function(){
        var resultEle= document.getElementById('result');
        var number = document.getElementById('checkNumber').value; 
        if(number){
            var isPrime= operations.checkPrime(number);
            if(isPrime){
                resultEle.textContent="Number is Prime";
            } else {
                resultEle.textContent="Number is not Prime";
            }
        } else {
            resultEle.textContent="Invalid number";
        }
    }
}