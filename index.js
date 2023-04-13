//First test: takes call back function as an argument and calls that same function within the code
function receivesAFunction (callBackFunction){
    callBackFunction();                           
}

//Second test : takes no arguments but returns a named function.
function returnsANamedFunction (){
    function newFunction(){
        return "I'm a new function!"
    }
    return newFunction;
}

//Third test: takes no arguments but returns an anonymous function.
function returnsAnAnonymousFunction(){
    return (function(){ return "I'm an anonymous function!"});
}

receivesAFunction(function (){return "This is a callback function!"});

returnsANamedFunction();

returnsAnAnonymousFunction();