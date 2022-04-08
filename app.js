const operation = require("./calc");
const greeting = require("./hello");

try{
    console.log(operation.add(5, 3));
} catch(err){
    console.error(err);
}

try{
    console.log(operation.multiply('X', 2));
} catch(err){
    console.error(err);
}

try{
    console.log(greeting('Ramez', '07/12/1991'));
} catch (err){
    console.error(err);
}

try{
    console.log(greeting('Aly', '2020'));
} catch (err){
    console.error(err);
}



