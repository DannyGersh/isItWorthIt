var string = "";
var stats;

function OnStart(){
    stats = localStorage.getItem("stats");
    if(stats == "Revenue"){
        document.getElementById('title').innerHTML = 'how much are you paid for a hour of work ?';
    }
    else if(stats == 'Howers_per_day'){
        document.getElementById('title').innerHTML = 'how much hours do you work a day ?';
    }
    else{
        document.getElementById('title').innerHTML = 'Title not set';
    }

    calcSizes()
}
OnStart()



function addString(s){
    switch (s) {

        case ".":
            if(string.length != 0){
                if(!(string.split('.').length > 1)){
                    string += s;
                    updateStr(string)
                }
            }
            
            break;

        case "«":
            string = string.slice(0,-1);
            updateStr(string)
            // console.log(string)
            break;

        case "Ok":
                if(stats == "Revenue"){
                    localStorage.setItem("wage", string);
                }
                else if(stats == 'Howers_per_day'){
                    localStorage.setItem("Howers_per_day", string);
                }
                location.href='../index.html'
            break;

        case "Cansle":
            location.href='../index.html'
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

    document.getElementById('out_1').innerHTML = s;
    calcSizes();
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
    

}



