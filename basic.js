console.log("I've loaded successfully");
//var inquirer =  require('inquirer');
//questions and answers for the flashcards need to be in a constructor


function BasicCard(front,back){
    this.front = front;
    this.back = back;
}

//var question = new BasicCard();
//console.log(question);

module.exports = BasicCard;