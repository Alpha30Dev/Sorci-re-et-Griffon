// La sorcière démarre a la case 0
// Le griffon démarre a la case 50
// Le grimoire se trouve a la case 51
// fin de la partie si la sorcière attrape le grimoire ou si le griffon arrive a la case 0
// chaque joueur lance tour a tour un dé a 6 faces
// la sorcière et le griffon se déplace de la valeur du lancer du dé
// si la sorcière arrive sur la case du griffon pendant son tour,
// elle s'arrete immédiatement puis tire une carte Chance qui permet de :
// lancer un sort qui fais reculer le griffon de 3 cases
// S'enfuir en avançant d'une case
// Si le griffon arrive sur la case de la sorcière pendant son tour, il s'arrete. la sorcière doit alors lancer le dé : 
// si le score est supérieur a 3, elle tire une carte chance
// sinon elle recule de 2 cases

let positionSorciere = 0;
let positionGriffon = 50;
const positionGrimoire = 51;
let inGame = true
let nextCharacters = "Sorciere";
function finDePartie() {
    if (positionSorciere >= positionGrimoire || positionGriffon <= 0) {
        inGame = false;
        console.log (nextCharacters, "Remporte la Victoire!")
    }
}
function switchCharacter(){
    if (nextCharacters == "Sorciere"){
        nextCharacters = "Griffon";
    }
    else {
        nextCharacters = "Sorciere";
    }
    return;
}
function rollDice() {
    return 1 + Math.floor(Math.random() * 6);
  }
function sorciereDeplacement(){
    let deplacement = rollDice();
    positionSorciere += deplacement;
    console.log (`La sorcière avance de ${deplacement} cases et arrive sur la case ${positionSorciere}`);
    if (positionSorciere >= positionGriffon) {
      console.log("La sorcière est arrivée sur la case du griffon elle s'arrete et tire une carte chance");
      let ChanceCard = Math.random() < 0.5;
      if (ChanceCard) {
          console.log("La sorcière tire la carte de recul ! le griffon recule donc de 3 cases");
          positionGriffon -= 3;
      } else {
          console.log("La sorcière tire la carte fuite lui permetant d'avancer d'une case!");
          positionSorciere += 1;
      }
  }
  return positionSorciere;
}
function griffonDeplacement() {
  let deplacement = rollDice();
  positionGriffon -= deplacement;
  console.log(`Le griffon avance de ${deplacement} cases et arrive sur la case ${positionGriffon}`);
  
  if (positionGriffon <= positionSorciere) {
      console.log("Le griffon est arrivé sur la case de la sorcière! La sorcière doit lancer le dé");
      let déNombre = rollDice();
      
      if (déNombre > 3) {
          console.log(`La sorcière obtient ${déNombre} et peut tirer une carte chance!`);
          let chanceCard = Math.random() < 0.5;
          if (chanceCard) {
              console.log("La sorcière tire la carte de recul ! Le griffon recule donc de 3 cases");
              positionGriffon += 3;
          } else {
              console.log("La sorcière tire la carte fuite lui permettant d'avancer d'une case!");
              positionSorciere += 1;
          }
      } else {
          console.log(`La sorcière obtient ${déNombre} et doit reculer de 2 cases`);
          positionSorciere -= 2;
      }
  }
  
  return positionGriffon;
}
while (inGame === true) {
    if (nextCharacters == "Sorciere"){
        sorciereDeplacement();
    }
    else if (nextCharacters == "Griffon"){
        griffonDeplacement();
    }
    switchCharacter();
    finDePartie();
}
  



