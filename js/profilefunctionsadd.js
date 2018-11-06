addInformation.addEventListener("click",

function addInformation(){
    var inputUserProfile = localStorage.getItem("users");

    var userProfile = JSON.parse(inputUserProfile);

        var givenName = userProfile[0].inputGivenName;
        var familyName = userProfile[0].inputFamilyName;
        var email = userProfile[0].inputEmail;
        var password = userProfile[0].inputPassword;
        var birthdate = document.getElementById("birthdate").value;
        var gender = document.getElementById("gender").value;
        var streetNumber = document.getElementById("streetNumber").value;
        var postalCode = document.getElementById("postalCode").value;
        var city = document.getElementById("city").value;
        var country = document.getElementById("country").value;
        var phoneNumber = document.getElementById("phoneNumber").value;

    var user = {givenName, familyName, email, password, birthdate, gender, streetNumber, postalCode, city, country, phoneNumber};

    updatedProfileUsers.push(user);
    //JSON Stringidy is making all the objecs into a string so it can store it in the local storage.
    var usersString = JSON.stringify(updatedProfileUsers);
    //Saving the string into the local storage. "users" is the key, and userString is what is going to be saving.
    localStorage.setItem('updatedProfileUsers', usersString);
    //No me esta enviando a updatedprofile.html/cambie las listas ahora hace dos.
    // Eexplorar la idea de poner un contador para agregar mas usuarios.
    if(birthdate && gender && streetNumber && postalCode && city && country && phoneNumber){
        document.location.href = 'successfullregistration.html';
        }
        else{alert("Please fill in all the information.")
        }
    }
)