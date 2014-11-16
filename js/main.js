/**
 * Created by amirrajabi on 16/11/14.
 * create simple class
 */

//normal function
function milliSecound(){
    var date = new Date();
    return date.getMilliseconds();
};


//class A
function classA(){

    var date = new Date();

    return function(){

        return date.getMilliseconds();

    };

};

//class B
//capsulated var and function
function classB(){

    var date = new Date(),
        myNestedFun = function(){
            return date.getMilliseconds();
        };

    return{
        foo : myNestedFun
    };

};



window.onload = function(){
    var output = document.getElementById('output');
    var getMillA = classA();
    var getMillB = new classB();

    output.innerHTML = milliSecound();
    output.innerHTML += '<br/>'+ getMillA();
    output.innerHTML += '<br/>'+ getMillB.foo();
};

