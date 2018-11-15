class CreditCard {

    constructor(cardNumber, cardHolderName, validThru, cvv){
        this.cardNumber = this.hashCardNumber(cardNumber);
        this.cardHolderName = this.hashPass (cardHolderName);
        this.validThru = validThru;
        this.cvv = cvv;

    }
}