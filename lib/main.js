'use strict';

function upOne(input){
    let result='';
    for(let i =input;i>=2;i--){
        result+=i+' bottles of beer on the wall, '+ i +' bottles of beer.\n'
        result+='Take one down and pass it around, '+ i +' bottles of beer on the wall.\n'
    }
    return result;

}

function equalOne(){

    let result='';
    result +='1 bottle of beer on the wall, 1 bottle of beer.\n';
    result+='Take one down and pass it around, no more bottles of beer on the wall.\n';
    result+='No more bottles of beer on the wall, no more bottles of beer.\n';
    result+='Go to the store and buy some more, 99 bottles of beer on the wall.';
    return result;

}
function main(input){
    let result='';
    if (input>=2){
        result+=upOne(input);
        result+=equalOne();
    }
    else if (input==1){
        result+=equalOne();
    }else{
        result+='No more bottles of beer on the wall, no more bottles of beer.\n';
        result+='Go to the store and buy some more, 99 bottles of beer on the wall.';
    }
    console.log(result);

}

module.exports = main;
