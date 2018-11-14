
window.onload = function loadUser() {

    var inputUserProfile = localStorage.getItem("updatedProfileUsers");

    var userProfile = JSON.parse(inputUserProfile);

    document.getElementById("profileGivenName").innerHTML = userProfile[0].givenName;
}

var userCreditCard = [];

var addCreditCard = document.getElementById("addCreditCard");

addCreditCard.addEventListener("click",

function storeCreditCard(e){
    e.preventDefault()

    var inputCardNumber = document.getElementById("cardNumber").value;
    var inputCardHolderName = document.getElementById("cardHolderName").value;
    var inputValidThru = document.getElementById("validThruMonth").value + '/' + document.getElementById("validThruYear");
    var inputCVV = document.getElementById("cvv").value;
    var cardNumberCheck = inputCardNumber.length;
    var cvvCheck = inputCVV.length;

    if(cardNumberCheck != 16){
        alert("Credit card number is wrong, please try again.")
    }
    else{

    if(cvvCheck != 3){
        alert("CVV is wrong, please try again.")
    }
    else{

    if(inputCardNumber && inputCardHolderName && inputValidThru && inputCVV){

    var creditCard = {inputCardNumber, inputCardHolderName, inputValidThru, inputCVV};

    userCreditCard.push(creditCard);

    var usersString = JSON.stringify(userCreditCard);

    var encryptedCreditCard = window.btoa(usersString);

    localStorage.setItem('creditCard', encryptedCreditCard);

    document.location.href = 'creditcardadded.html';
    }
    else{
        alert("Please fill in all the information.")

            }
        }
    }
}
)