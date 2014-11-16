var myNS = myNS || {};

myNS.sum = function(eq){
    this.eqCtl = document.getElementById('eq');
};

myNS.sum.prototype = {

    add : function(a, b){

        var sumNum = a + b;
        this.eqCtl.innerHTML = sumNum;

    }

}


var sumFun = new myNS.sum('eq');
sumFun.add(2, 6);