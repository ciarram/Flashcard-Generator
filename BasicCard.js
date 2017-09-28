var basicCard = require('./basic.js');
var cardData = require('./basic.json');
var inquirer =  require('inquirer');

//console.log(BasicCard);

inquirer.prompt([
    {
    message: cardData.front,
    name: "answer",
    validate: function(name) {
        //return value !== firstQuestion.back;
        if (name != cardData.back) {
            console.log("Sorry, the correct answer is " + back);
            return false;
        } else{
            console.log("Correct!");
            return true;
      }
    }
    }
    // {
    //     message: secondQuestion.front,
    //     name: "secondAnswer",
    //     validate: function(name){
    //         if(name != secondQuestion.front){
    //             console.log("Sorry the correct answer is " + secondQuestion.back);
    //         } else{
    //             console.log("Correct!");
    //         }
    //     }
    // }, 
]).then();