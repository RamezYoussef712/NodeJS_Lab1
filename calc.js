const add = function(x, y){
    if(isNaN(x) || isNaN(y)){
        throw "Both values must be numbers!";
    }
    return `The sum = ${x + y}`;
}

const subtract = function(x, y){
    if(isNaN(x) || isNaN(y)){
        throw "Both values must be numbers!"
    }
    return `The subtraction result = ${x + y}`;
}

const multiply = function(x, y){
    if(isNaN(x) || isNaN(y)){
        throw "Both values must be numbers!"
    }
    return `The multiplication result = ${x * y}`;
} 

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply
}