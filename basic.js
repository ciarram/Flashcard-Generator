console.log("I've loaded successfully");
var cardData = require('./basic.json');

//var fs = require('fs');
//var inquirer =  require('inquirer');
//questions and answers for the flashcards need to be in a constructor

 //for(var i = 0; i < (cardData.length); i++){
    function basicCard(front,back){
        this.front = front;
     
        this.back = back;
    }

    //console.log(question.front);
 //}

module.exports = basicCard;