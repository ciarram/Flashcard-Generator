//console.log("I've loaded successfully");
//var inquirer =  require('inquirer');
//questions and answers for the flashcards need to be in a constructor


function BasicCard(front,back){
    this.front = front;
    this.back = back;
}

var firstQuestion = new BasicCard("When did the Spanish Armada attempt to attack England?", 1588);
console.log(firstQuestion);
var secondQuestion = new BasicCard("Which French monarch was known as the 'Sun King'?", "Louis XIV");
console.log(secondQuestion);
var thirdQuestion = new BasicCard("The Ottoman Empire captured which city in 1453?", "Constantinople");
console.log(thirdQuestion);
var fourthQuestion = new BasicCard("In 1066, William the Conqurer fought in which battle to gain control of the English crown?", "Battle of Hastings");
console.log(fourthQuestion);
var fifthQuestion = new BasicCard("What was the fight between the Lancaster and York houses for the English crown?", "War of the Roses");
console.log(fifthQuestion);
var sixthQuestion = new BasicCard("What was the name of the Native American city that existed in current day St. Louis?", "Cahokia");
console.log(sixthQuestion);
module.exports = BasicCard;