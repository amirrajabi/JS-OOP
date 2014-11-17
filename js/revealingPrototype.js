var myNS = myNS || {};

myNS.CalculRP = function(eq)
{
  this.rpCal = document.getElementById(eq);
};

myNS.CalculRP.prototype = function(){
    var add = function(a, b){
        this.rpCal.innerHTML = a + b;
    }

    return {
        add : add
    }
}();

myNS.CalculRP.prototype.add = function(a, b){
    this.rpCal.innerHTML = a / b;
};

var nRP = new myNS.CalculRP('rp');
nRP.add(32,20);

