console.log("I've loaded successfully");
//questions for the flashcards need to be in a constructor
function front(firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion){
    this.firstQuestion = "What year did the Spanish Armada sail for England";
    this.secondQuestion = "Which French monarch was known as the 'Sun King'?";
    this.thirdQuestion = "The Ottoman Empire captured which city in 1453?";
    this.fourthQuestion = "In 1066, William the Conqurer fought in which battle to gain control of the English crown?";
    this.fifthQuestion = "What was the fight between the Lancaster and York houses for the English crown?";
    this.sixthQuestion = "What was the name of the Native American city that existed in current day St. Louis?";
}

//answers for the questions need to be in a constructor
function back(firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer, sixthAnswer){
    this.firstAnswer = 1588;
    this.secondAnswer = "Louis XIV";
    this.thirdAnswer = "Constantinople";
    this.fourthAnswer = "Battle of Hastings";
    this.fifthAnswer = "War of the Roses";
    this.sixthAnswer = "Cahokia";
}


module.exports = BasicCard;