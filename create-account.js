function createAccount(pin, amount = 0) {
  return {
    validatePIN(inputPIN) {
      if (inputPIN === pin) {
        return true;
      }
      return false;
    },
    invalidPIN() {
      return "Invalid PIN.";
    },
    checkBalance(inputPIN) {
      if (this.validatePIN(inputPIN)) {
        return `$${amount}`;
      }
      return this.invalidPIN();
    },
    deposit(inputPIN, moneyIn) {
      if (this.validatePIN(inputPIN)) {
        amount += moneyIn;
        return `Succesfully deposited $${moneyIn}. Current balance: $${amount}.`;
      }
      return this.invalidPIN();
    },
    withdraw(inputPIN, moneyOut) {
      if (this.validatePIN(inputPIN)) {
        if (amount >= moneyOut) {
          amount -= moneyOut;

          return `Succesfully withdrew $${moneyOut}. Current balance: $${amount}.`;
        }
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      return this.invalidPIN();
    },
    changePin(inputPIN, newPIN) {
      if (this.validatePIN(inputPIN)) {
        pin = newPIN;
        return "PIN successfully changed!";
      }
      return this.invalidPIN();
    },
  };
}

module.exports = { createAccount };
