var inquirer =  require('inquirer');
var BasicCard = require('./BasicCard.js');
//console.log(BasicCard);

var firstQuestion = new BasicCard("When did the Spanish Armada attempt to attack England?", 1588);
// console.log(firstQuestion.front);
var secondQuestion = new BasicCard("Which French monarch was known as the 'Sun King'?", "Louis XIV");
// console.log(secondQuestion.front);
var thirdQuestion = new BasicCard("The Ottoman Empire captured which city in 1453?", "Constantinople");
// console.log(thirdQuestion.front);
var fourthQuestion = new BasicCard("In 1066, William the Conqurer fought in which battle to gain control of the English crown?", "Battle of Hastings");
// console.log(fourthQuestion.front);
var fifthQuestion = new BasicCard("What was the fight between the Lancaster and York houses for the English crown?", "War of the Roses");
// console.log(fifthQuestion.front);
var sixthQuestion = new BasicCard("What was the name of the Native American city that existed in current day St. Louis?", "Cahokia");
// console.log(sixthQuestion.front);

inquirer.prompt([
    {
    message: firstQuestion.front,
    name: "firstAnswer",
    validate: function(name) {
        //return value !== firstQuestion.back;
        if (name != firstQuestion.back) {
            console.log("Sorry, the correct answer is " + firstQuestion.back);
            return false;
        } else{
            console.log("Correct!");
            return true;
      }
    }
    },
    {
        message: secondQuestion.front,
        name: "secondAnswer",
        validate: function(name){
            if(name != secondQuestion.front){
                console.log("Sorry the correct answer is " + secondQuestion.back);
            } else{
                console.log("Correct!");
            }
        }
    }, 
]).then();