function getComputerChoice() {
    const choiceNum = Math.floor(Math.random() * 3);
    let choiceHand;
    switch(choiceNum) {
        case 0:
            choiceHand = "Rock";
            break;
        case 1:
            choiceHand = "Paper";
            break;
        case 2:
            choiceHand = "Scissor";
            break;
        default:
            console.log("Computer can't play");
    }
    return choiceHand;
}