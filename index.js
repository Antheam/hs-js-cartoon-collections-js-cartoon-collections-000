
function dwarfRollCall(dwarves) {
var numAndDwarves=''
for (var i = 0; i< dwarves.length; i++) {
   numAndDwarves += `${i+1}. ${dwarves[i]} `
   }
  return numAndDwarves;
}

function summonCaptainPlanet(planeteerCalls){
let array=[]  
for (var i = 0; i < planeteerCalls.length; i++) {
    if(typeof planeteerCalls[i]==='string'){
 planeteerCalls[i]=planeteerCalls[i].toUpperCase();
 array.push(`${planeteerCalls[i]}!`)
        }
   }return array }
   
function longPlaneteerCalls(words) {
  var longWord =false
  for (var i=0;i<words.length;i++){
    if (words[i].length>4){
      longWord=true;
    }
  }
  return longWord;
}

function findTheCheese (foods) {
  for(var i=0; i<foods.length;i++){
    if (foods[i]==='cheddar'){
      return foods[i]

    }
}
return 'no cheese!'
}
