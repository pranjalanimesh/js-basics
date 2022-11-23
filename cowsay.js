const cowsay= require("cowsay");

console.log(
    cowsay.say({
        
        text: "moooooo",
        e: "xx",
        T : "U"
    })
)

const Quote = require("inspirational-quotes");

console.log(Quote.getQuote());

const text = Quote.getQuote().text

console.log(
    cowsay.say({
        text: text ,
        e: "xx", 
        T : "U"           
    })
)
    


