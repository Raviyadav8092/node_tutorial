
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end("welcome to our home page");
    }
    else if (req.url === '/about') {
        res.end("here is our short history");
    }

    else {
        res.end(`
        <h1>OOPS !!!</h1>
        <p>Can't seem to find the page you're looking for .</p>
        <a href="/"> Back HOme </a>
        `);
    }
})

server.listen(5000);




























// //common js , every file is module (by default)
// //modues -- Encapsulated code (Only share minimum)

// const name = require("./names");        //we are importing the data from the names.js file By using "require" keyword .
// const sayHi = require("./sayHi");       //requiring function

// require("./mind-grenade");

// // console.log(name);
// // console.log(sayHi);


// // sayHi(name.john);
// // sayHi("RAvi");
// // sayHi(name.peter);























// const amount = 15;

// if (amount < 12) {
//     console.log("Small number");
// }
// else {
//     console.log("large NUmber");
// }

// console.log(`Hey it's my first node app`);

// console.log(__dirname);

// setInterval(() => {
//     console.log("Ravi");
// }, 1000)