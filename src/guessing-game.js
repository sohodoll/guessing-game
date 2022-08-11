class GuessingGame {

    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessnum = Math.round((this.min + this.max) / 2);
        return this.guessnum;
    }

    lower() {
        this.max = this.guessnum;
    }

    greater() {
        this.min = this.guessnum;
    }

}

module.exports = GuessingGame;