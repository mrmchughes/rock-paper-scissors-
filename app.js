function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return(choices[randomChoice]);
}