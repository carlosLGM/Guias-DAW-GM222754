function iniciar(){

var selcountry = document.getElementById('country');
var addcity = document.getElementById('btnagregar');

var cities = new Array(4);
cities["Italia"] = ["Roma", "Turín", "Milán", "Venecia", "Verona"];
cities["Francia"] = ["Paris", "Lion", "Niza", "Mónaco"];
cities["España"] = ["Madrid", "Barcelona", "Valencia", "Sevilla"];
cities["Estados Unidos"] = ["Washington", "Florida", "San Francisco", "New York","Houston"];

selcountry.onclick = function(){
this.className = this.options[this.selectedIndex].className;
}
selcountry.onchange = function(){
addOptions(cities[this.options[this.selectedIndex].text], document.testform.city);
}

addcity.onclick = function(){
addCity(cities[document.testform.country.options[document.testform.country.selectedIndex].
text], document.testform.city)
}
}

function removeOptions(optionMenu){
for(i=0; i<optionMenu.options.length; i++){
optionMenu.options[i] = null;
}
}

function addOptions(optionList, optionMenu){
var i=0;

removeOptions(optionMenu);
for(i=0; i<optionList.length; i++){
optionMenu[i] = new Option(optionList[i], optionList[i]);
}
}

function addCity(optionList, optionMenu){
var newcity;
do{
newcity = prompt("Ingrese la ciudad que desea agregar:","");
}while(newcity == null || newcity == undefined || newcity.length == 0);
optionList.push(newcity);
removeOptions(optionMenu);
addOptions(optionList, optionMenu);
}
window.onload = iniciar;
