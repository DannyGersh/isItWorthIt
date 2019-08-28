var height = document.documentElement.clientHeight


div = document.getElementById('container');
divs = div.getElementsByTagName('p');
for (var i = 0; i < divs.length; i += 1) {
  divs[i].style.height = (height/4).toString()+"px";
}
