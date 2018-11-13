// We create a shoe class, so we have an easy way to create shoes and further implement features at a later stage
class Shoe {

// The constructor for our class, which will allow us to create new objects of our class

    constructor(productname, brandname, price, size) {
        this.productname = productname;
        this.brandname = brandname;
        this.price = price;
        this.size = "";
    }

// Creating the HTML which can be called in the Javascript:
    createHTML() {
        return "<h1>" + this.productname + "</h1>" + 

        "<h2>" + this.brandname + "</h2>" + 

        "<h3>" + this.price + "</h3>" +

        "<h4>" + "Product description (xxxxx)" + "</h4>" + 

        "<h5>" + "Article no: xxxxx" + "</h5>" 

        
    }
}

// Createing the object of the shoes. Windoes at it needs to be global:
window.shoes = {
    sneaker1: new Shoe("SLHDAVID SNEAKER W NOOS", "by Selected Homme", "200$", ""),
    boots1: new Shoe("NORMANTON BOOTS", "by Polo Ralph Lauren", "200$", ""),
    loafer1: new Shoe("MARIO LOAFERS IN BROWN", "by Vagabond", "200$", "")
}; 


// Bind the button to a variable for later use
var submit = document.getElementById('submit');
