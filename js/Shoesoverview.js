// We create a shoe class, so we have an easy way to create shoes and further implement features at a later stage
class Shoesoverview {

    // The constructor for our class, which will allow us to create new objects of our class
        constructor(productimage, productname, brandname, price) {
            this.productimage = productimage;
            this.productname = productname;
            this.brandname = brandname;
            this.price = price;
        }
    
    // Creating the HTML which can be called in the Javascript
        createHTML() {
            return "<a>" + this.productimage + "</a>" +

            "<h4>" + this.productname + "</h4>"

            "<h5>" + this.brandname + "</h5>" + 
    
            "<p>" + this.price + "<p>" +
            
            "<img src='Pictures/menboots2.jpg' width='250'>"
            "<a href='menchelseabootshighversion.html'>"    
                "<h4>NORMANTON BOOTS</h4>"
                "<h5>by Polo Ralph Lauren</h5>"
               "<p>200$</p>"
           
        }
        }
    
    // Creating the object of the shoes specific shoes. Chose 'Windows' at it needs to be global, so it can be called with the html files of specific shoes:
    window.shoes = {
        normantonBoot: new Shoesoverview("img src='../pictures/menboots2.jpg' width='250'", "NORMANTON BOOTS", "by Polo Ralph Lauren", "200§")
    }; 

    