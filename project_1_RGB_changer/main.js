
function get_red()
{
var set  = document.getElementById("set_red").value;
document.getElementById("show_red").value = set;
}

function get_blue()
{
var set  = document.getElementById("set_blue").value;
document.getElementById("show_blue").value = set;
}

function get_green()
{
var set  = document.getElementById("set_green").value;
document.getElementById("show_green").value = set;
}

var input = document.querySelectorAll("input");
        for(var i = 0; i < input.length; i++){
        input[i].addEventListener("input", function(){
            var red = document.getElementById("set_red").value,
                green = document.getElementById("set_green").value,
                blue = document.getElementById("set_blue").value;
                var display = document.getElementById("result");
                display.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
            });
    }