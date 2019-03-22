
function dwarfRollCall(dwarves) {
var numAndDwarves=''
for (var i = dwarves.length/2; i< dwarves.length; i++) 
  

  
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
  var longWord =''
  for (var i=0;i<words.length;i++){
    if (words[i].length>4){
      longWord=true;
    }else{
      longWord=false
    }
  }
  return longWord;
}

function findTheCheese (foods) {
  for(var i=0; i<foods.length;i++){
    if (foods[i]==='cheddar'||foods[i]==='gouda'||foods[i]==='camembert'||foods[i]==='blue cheese'){
      return foods[i]

    }
}
return 'no cheese!'
}
