// We create a shoe class, so we have an easy way to create shoes and further implement features at a later stage
class Shoe {

// The constructor for our class, which will allow us to create new objects of our class

    constructor(productname, brandname, price, size) {
        this.productname = productname;
        this.brandname = brandname;
        this.price = price;
        this.size = "";
    }

// Creating the HTML which can be called in the Javascript (COMMENT):
    createHTML() {
        return "<h1>" + this.productname + "</h1>" + 

        "<h2>" + this.brandname + "</h2>" + 

        "<h3>" + this.price + "</h3>" +

        "<h4>" + "Product description (xxxxx)" + "</h4>" + 

        "<h5>" + "Article no: xxxxx" + "</h5>" +

        "<p>" + "Select a size" + "</p>" +

    
        //Adding a select-menu for choosing size of the shoes
        "<select name='Choose size' id='sizeSelected'>" +
            "<option value='EUR 41'>EUR 41</option>" +
            "<option value='EUR 42'>EUR 42</option>" +
            "<option value='EUR 43'>EUR 43</option>" +
            "<option value='EUR 44'>EUR 44</option>" +
            "<option value='EUR 45'>EUR 45</option>" + 
            "<option value='EUR 46'>EUR 46</option>" +
            "<option value='EUR 47'>EUR 47</option>" +
        "</select>" +

        "<input type='button' onclick='getValue()' value='Add to shopping cart'>"
    }
    }

// Creating the object of the shoes specific shoes. Chose 'Windows' at it needs to be global, so it can be called with the html files of specific shoes:
window.shoes = {
    sneaker1: new Shoe("SLHDAVID SNEAKER W NOOS", "by Selected Homme", "200$", ""),
    boots1: new Shoe("NORMANTON BOOTS", "by Polo Ralph Lauren", "200$", ""),
    loafer1: new Shoe("MARIO LOAFERS IN BROWN", "by Vagabond", "200$", "")
}; 


// Bind the button to a variable for later use
var submit = document.getElementById('submit');

// function for creating an alert about the user has added size x to the shopping cart 
function getValue() {
    alert("You've added size " + document.getElementById("sizeSelected").value + " to the shopping cart");
}
