function guessingGame() {
  const correctNum = Math.floor(Math.random() * 100);
  const won = false;
  let guesses = 0;

  const makeGuess = (guess) => {
    if (!won) {
      guesses++;
      if (guess > correctNum) return `${guess} is too high`;
      if (guess < correctNum) return `${guess} is too low!`;
      if (guess === correctNum) {
        won = true;
        const noun = guesses !== 1 ? "guesses" : "guess";
        return `You win! you found ${correctNum} in ${guesses} ${noun}`;
      }
    }
  };
  return makeGuess;
}

module.exports = { guessingGame };
