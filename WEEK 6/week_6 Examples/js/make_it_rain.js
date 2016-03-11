function add(n1,n2){
    return(n1+n2);
}

function subtract(n1,n2){
    return(n1-n2);
}

function multiply(n1,n2){
    return(n1*n2);
}

function divide(n1,n2){
    return(n1/n2);
}

function makeItRain(n1, n2, con){
var result;
    switch(con){
    case 'add':
        result=add(n1,n2)
        break;
        
    case 'subtract':
        result=subtract(n1,n2)
        break;
        
    case 'multiply':
        result=multiply(n1,n2)
        break;
            
    case 'divide':
        result=divide(n1,n2)
        break;
            
    default: 
        result = "0";
    
    }
    return result;
}


function contater(n){
    var num;
    //test n by parsing the integer
    if (parseInt(n)!==NaN){
    //if it is a number, convert it to a string
        num=n.toString();
    }

    else{
        num=n;
    }

    return num;
    
}




















