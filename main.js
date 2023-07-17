function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let digit1, operator, digit2;

const operate = (digit1, operator, digit2) =>{
    if(operator === '+'){
        add(digit1, digit2);
    } else if(operator === '-'){
        subtract(digit1, digit2);
    }else if(operator === '*'){
        multiply(digit1, digit2);
    }else if(operator === '/'){
        divide(digit1, digit2);
    }
};