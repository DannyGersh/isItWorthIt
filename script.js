

var string = "";
var wage = 30;
var ratio =  60 / wage;
var Howers_per_day = 8;


function addString(s){
    switch (s) {

        case "clear":
            string = "";
            document.getElementById('out_1').innerHTML = "";
            document.getElementById('out_2').innerHTML = "";
            // console.log(string)
            break;

        case "«":
            string = string.slice(0,-1);
            updateStr(string)
            // console.log(string)
            break;

        case "*":
        case "/":
        case "+":
        case "-":
            if( string.length != 0 ){
                if( 
                    string.slice(-1) != "*" &&
                    string.slice(-1) != "/" &&
                    string.slice(-1) != "-" &&
                    string.slice(-1) != "+" 
                    )
                {
                    string += s;
                    updateStr(string)
                    // console.log(string)    
                }
            } 
            break;
        
        case "=":
            if( string.length != 0 ){
                if( 
                    string.slice(-1) != "*" &&
                    string.slice(-1) != "/" &&
                    string.slice(-1) != "-" &&
                    string.slice(-1) != "+" 
                    )
                {
                    string = eval(string)
                    string = string.toString();
                    updateStr(string)
                    // console.log(string)
                }
            }
            break;

        default:
            if( !(string.length == 0 && s == "0") ){
                string += s;
                updateStr(string)
                // console.log(string) 
            } 
            break;


      }
}




function updateStr(s){
    if( s.length != 0 ){
        if( 
            s.slice(-1) != "*" &&
            s.slice(-1) != "/" &&
            s.slice(-1) != "-" &&
            s.slice(-1) != "+" 
            )
        {

            var min = eval(s) * ratio;
            var fin;

            var ho = 60;
            var da = Howers_per_day * ho;
            var we = da * 7;
            var mo = da * 30;
            var ye = da * 365;

            // convert string to apropriete format:
            {
            if( min < 60 ){
                fin = min.toFixed(1).toString() + ' minutes';
            }
            else if ( min < 60 * Howers_per_day ){
                var hou = Math.floor(min / 60);
                fin = hou.toString() + ' howers ' + '<br />' + (min % 60).toFixed(1).toString() + ' minutes';
            }
            else if ( min < 60 * Howers_per_day * 7 ){
                var day = Math.floor(min / (60 * Howers_per_day));
                fin = day.toString() + ' days ' + '<br />' + (min / 60 % Howers_per_day).toFixed(1).toString() + ' howers';
            }
            else if ( min < 60 * Howers_per_day * 30 ){
                var week = Math.floor(min / (60 * Howers_per_day * 7))
                fin = week.toString() + ' weeks ' + '<br />' + (min / 60 / Howers_per_day % 7).toFixed(1).toString() + ' days';
            }
            else if( min < ye){
                var month = Math.floor(min / mo);
                fin = month.toString() + ' months ' + '<br />' + (min % mo / we).toFixed(1).toString() + ' weeks';
            }
            else{
                var year = Math.floor(min / ye);
                fin = year.toString() + ' years ' + '<br />' + (min % ye / mo).toFixed(1).toString() + ' months';
            }
            }
            document.getElementById('out_2').innerHTML = fin
        }
    } 
    
    document.getElementById('out_1').innerHTML = s
    calcSizes();
}



function stats(option) {
    if(option=='R'){
        wage = prompt("how much money do you earn for a hower of work ?"); 
        ratio = 60 / parseInt(wage);
        document.getElementById("Revenue").innerHTML = "Revenue: " + wage;
        string = "";
        document.getElementById("out_1").innerHTML = "";
        document.getElementById("out_2").innerHTML = "";
    }
    if(option=='H'){
        Howers_per_day = prompt("how much howers do you work each day ?", ""); 
        ratio = 60 / parseInt(wage);
        document.getElementById("Howers per day").innerHTML = "Howers per day: " + Howers_per_day;
        string = "";
        document.getElementById("out_1").innerHTML = "";
        document.getElementById("out_2").innerHTML = "";
    }
}





function calcSizes(){

    var height = document.documentElement.clientHeight
    var rows = 12;

    var div = document.getElementById('container');
    var divs = div.getElementsByTagName('button');
    for (var i = 0; i < divs.length; i += 1) {
        divs[i].style.height = (height/rows-3).toString()+"px";
    }
    
    divs = div.getElementsByTagName('p');
    for (var i = 0; i < divs.length; i += 1) {
        divs[i].style.height = (height/rows*2).toString()+"px";
        divs[i].style.fontSize = "5vw";
        //divs[i].style.textAlign = "center";
    }
    
    divs = div.getElementsByTagName('div');
    divs[0].style.height = (height/rows-3).toString()+"px";
    divs[0].style.width = "100%";
}

calcSizes()