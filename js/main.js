/**
 * Created by amirrajabi on 16/11/14.
 * create simple class
 */

//normal function
function milliSecound(){
    var date = new Date();
    return date.getMilliseconds();
}


//class A
function classA(){
    var date = new Date();

    return function(){

        return date.getMilliseconds();

    }

}

//class B
function classB(){
    var date = new Date();

    var myNestedFun = function(){

        return date.getMilliseconds();

    };

    return{
        foo : myNestedFun
    };

}

