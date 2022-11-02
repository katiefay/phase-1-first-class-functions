function receivesAFunction(callyBacky){
    return callyBacky();
}

function returnsANamedFunction(){
    return function y(){
        y+10
    }
}


function returnsAnAnonymousFunction(){
    return function(a, b){
        a+b;
    }
}
