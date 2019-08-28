

var string = "";
var wage = 30;
var ratio =  60 / wage;




function addString(s){
    switch (s) {

        case "clear":
            string = "";
            updateStr(string)
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
            // convert string to apropriete format:
            {
            if( min < 60 ){
                fin = min.toString() + ' mi';
            }
            else if ( min < 60 * 8 ){
                var hou = Math.floor(min / 60);
                fin = hou.toString() + ' Ho, ' + (min%60).toString() + ' Mi';
            }
            else if ( min < 60 * 8 * 7 ){
                var day = Math.floor(min / (60 * 8));
                fin = day.toString() + ' Da, ' + (min / 60 % 8).toString() + ' Ho';
            }
            else if ( min < 60 * 8 * 32 ){
                min /= (60 * 8 * 7);
                min = min.toString() + 'w';
            }
            }
            document.getElementById('out_2').innerHTML = fin
        }
    } 
    
    document.getElementById('out_1').innerHTML = s
    calcSizes();
}







function calcSizes(){

    var height = document.documentElement.clientHeight
    var rows = 11;

    var div = document.getElementById('container');
    var divs = div.getElementsByTagName('button');
    for (var i = 0; i < divs.length; i += 1) {
        divs[i].style.height = (height/rows-3).toString()+"px";
    }
    
    divs = div.getElementsByTagName('p');
    for (var i = 0; i < divs.length; i += 1) {
        divs[i].style.height = (height/rows*2).toString()+"px";
        divs[i].style.fontSize = "70px";
        //divs[i].style.textAlign = "center";
    }
    
    divs = div.getElementsByTagName('div');
    divs[0].style.height = (height/rows-3).toString()+"px";
    divs[0].style.width = "100%";
}

calcSizes()