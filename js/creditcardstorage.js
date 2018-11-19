// This function is connected to the creditcard.html, it is used for two main things:
// 1. Load the user to personalize the page.
// 2. Store the credit card information encrypted.

//This first function is loading the stored user's name in local storage.
window.onload = function loadUser() {
//Here we are telling the system to look for the array with the key "updatedProfileUsers" in local storage.
    var inputUserProfile = localStorage.getItem("updatedProfileUsers");
//Once it finds it, it finds the stringified version which was dont with JSON.stringidy.
//Next we tell the system to parse the string to make it objects again.
    var userProfile = JSON.parse(inputUserProfile);
//Once it is parsed, we tell the system th look for the value of the "givenName" object.
    document.getElementById("profileGivenName").innerHTML = userProfile[0].givenName;
}
//The function to store the credit card starts here.
//We create a new array that will be storing the Credit Cards.
var userCreditCard = [];
//In here we are telling the system to find the button in html called "addCreditCard".
var addCreditCard = document.getElementById("addCreditCard");
//Once it finds it, we tell the system to hear for a "click" in the buton to start the funcion.
addCreditCard.addEventListener("click",
//When the function starts, we add the "preventDefault" to make sure that it doesn't store the information in the URL.
function storeCreditCard(e){
    e.preventDefault()
//In here we are telling the system to find the values filled in in the html in order to create variables that will be stored.
    var inputCardNumber = document.getElementById("cardNumber").value;
    var inputCardHolderName = document.getElementById("cardHolderName").value;
    var inputValidThru = document.getElementById("validThruMonth").value + '/' + document.getElementById("validThruYear");
    var inputCVV = document.getElementById("cvv").value;
//In this variables we are interested not in having the value, but the length of the value in order to make the "checks" work.
    var cardNumberCheck = inputCardNumber.length;
    var cvvCheck = inputCVV.length;
//Once the function starts, the first thing that it will do it will check if the Credit Card has exactly 16 digits.
    if(cardNumberCheck != 16){
        alert("Credit card number is wrong, please try again.")
    }
    else{
//Same as with the Credit Card number, it will now check that the CVV has exactly 3 digits.
    if(cvvCheck != 3){
        alert("CVV is wrong, please try again.")
    }
    else{
//If it throws true in the past two text it will proceed to make a last check that everything is filled in.
    if(inputCardNumber && inputCardHolderName && inputValidThru && inputCVV){
//Once it checks that everything is filled in, it will create an array of objects. Thats why we use {} and not () or [].
//We are also telling the system here to store all the objects in once variable called creditCard.
    var creditCard = {inputCardNumber, inputCardHolderName, inputValidThru, inputCVV};
//Now we tell the system to push the variable creditCard into the array that we created before.
    userCreditCard.push(creditCard);
//As local storage cannot store objects, we tell the system to modify it into a string with JSON.stringify.
    var usersString = JSON.stringify(userCreditCard);
//Now that we have a string, we tell the system to encrypt the information with window.btoa, this way it will store the information encrypted so that we cannot see the credit card information.
    var encryptedCreditCard = window.btoa(usersString);
//Finally we tell the system to save the encrypted information in local storage under the key "creditCard".
    localStorage.setItem('creditCard', encryptedCreditCard);
//Once it finishes, an alert is created telling the credit card was added
    alert("Your credit card information has been added succesfully!")
    }
    else{
        alert("Please fill in all the information.")

            }
        }
    }
}
)