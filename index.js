function receivesAFunction(callback){
   return callback();
}

function returnsANamedFunction(){
    return function balls(){

    }
}

function returnsAnAnonymousFunction(){
    return function(){

    }
}