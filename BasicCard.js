var basicCard = require('./basic.js');
var cardData = require('./basic.json');
var inquirer =  require('inquirer');

console.log(basicCard);

var count = 0;


function questions() {
    if (count < cardData.length) {
        var chosenCard = new basicCard(cardData[0].front, cardData[0].back);
        // console.log(chosenCard);				
        // playedCard = chosenCard(cardData[count], cardData[count]);
        inquirer.prompt([
            {
                message: cardData[count].front,
                name: "question"
            }
        ]).then(function (answer) {				
            if (answer.question === cardData[count].back) {
                console.log("You are correct.");
                count++;
                questions();
            } else {
                console.log("Sorry, not right")
                count++;
                questions();
            }
        });
    }
}


questions();