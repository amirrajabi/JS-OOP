//similar to Class Pattern

var Calculator = function (eq) {

    var modSum = document.getElementById('mod')

    return {
        add : function(a, b){
            var val = a + b;
            modSum.innerHTML = val;
        }
    }
}

var cal = new Calculator('eq');
cal.add(2, 4);