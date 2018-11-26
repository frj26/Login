// We create a shoe class, so we have an easy way to create shoes and further implement features at a later stage
class product {

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

            "<h4>" + this.productname + "</h4>" +

            "<h5>" + this.brandname + "</h5>" + 
    
            "<p>" + this.price + "<p>" 
        
        }
        }
    
    // Creating the object of the shoes specific shoes. Chose 'Windows' at it needs to be global, so it can be called with the html files of specific shoes:
    // Wee add links to the image and the text, so the user can click on both image and text to see the specific shoe.
    window.shoes = {
        normantonBoot:new product("<a href='menchelseabootshighversion.html'> <img src='pictures/menboots2.jpg' width='250'>", "<a href=menchelseabootshighversion.html> NORMANTON BOOTS", "by Polo Ralph Lauren", "200$"),
        rossiBoot: new product("<a href='#'> <img src='pictures/menboots1.jpg' width='250'>", "<a href='#'> ROSSI SDT CHELSEA BOOT", "by New Look", "150$"),
        slhbaxterBoot: new product("<a href='#'> <img src='pictures/menboots3.jpg' width='250'>","<a href='#'> SLHBAXTER CHELSEA SUEDE BOOT NOOS", "by Selected Homme", "200$"),
        jfwstokeBoot: new product("<a href='#'> <img src='Pictures/menboots4.jpg' width='250'>", "<a href='#'> JFWSTOKE BOOT NUBUCH HONEY NOOS", "by Jack & Jones", "175$"),
        slhdavidSneaker: new product("<a href='SLHDAVID SNEAKER W NOOS.html'> <img src='Pictures/mensneakers1.jpg' width='250'>","<a href='SLHDAVID SNEAKER W NOOS.html'> SLHDAVID SNEAKER W NOOS", "by Selected Homme", "200$"),
        gazelleSneaker: new product("<a href='#'> <img src='pictures/mensneakers2.jpg' width='250'>", "<a href='#'> GAZELLE", "by Adidas Originals", "100$"),
        ml574eggSneaker: new product ("<a href='#'> <img src='pictures/mensneakers3.jpg' width='250'>", "<a href='#'> ML574EGG", "by New Balance", "150$"),
        xplrSneaker: new product("<a href='#'> <img src='pictures/mensneakers4.jpg' width='250'>", "<a href='#'> X_PLR", "by Adidas Originals", "125$"),
        marioLoafer: new product("<a href='mensloafersmario.html'> <img src='Pictures/menloafers1.jpg' width='250'","<a href='mensloafersmario.html'> MARIO LOAFERS IN BROWN", "by Vagabond", "200$"),
        owengreenLoafer: new product("<a href='#'> <img src='pictures/menloafers2.jpg' width='250'>", "<a href='#'> OWEN LOAFERS IN GREEN", "by Vagabond", "150$"),
        owennavyLoafer: new product("<a href='#'> <img src='pictures/menloafers3.jpg' width='250'>", "<a href='#'> OWEN LOAFERS IN NAVY", "by Vagabond", "160$")

    }; 

    