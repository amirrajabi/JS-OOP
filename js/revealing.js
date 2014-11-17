var calcul = function(eq)
{
    var con = document.getElementById(eq),
        add = function(a, b)
        {
            con.innerHTML = a + b;
        }

    return {
        add : add
    }

}('calcul');

calcul.add(2, 80);