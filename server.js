//Without express
/*const http = require("http");

const server = http.createServer(function(req, res) {
    console.log(`user visited ${req.url}`);
    res.end("hello");
});

console.log("listening on http://localhost:3000");
server.listen(3000);*/

//With express
/*const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.end("Welcome to my site!");
});

app.get("/complement", function(req, res){
    res.end("You look nice today.");
});

app.listen(3000);
console.log("listening on http://localhost:3000");*/

//Refactor
const express = require("express");
const path = require("path");

const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const verseDay = [
    "Keep your lives free from the love of money and be content with what you have, because God has said, 'Never will I leave you; never will I forsake you.' <br><em>Hebrews 13:5</em>",
    "You, Lord, are forgiving and good, abounding in love to all who call to you. <br><em>Psalm 86:5</em>",
    "Therefore encourage one another and build each other up, just as in fact you are doing. <br><em>1 Thessalonians 5:11</em>",
    "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness. <br><em>1 John 1:9</em>",
    "Defend the weak and the fatherless; uphold the cause of the poor and the oppressed. <br><em>Psalm 82:3</em>",
    "Very truly I tell you, whoever believes in me will do the works I have been doing, and they will do even greater things than these, because I am going to the Father. <br><em>John 14:12</em>",
    "Humble yourselves, therefore, under God’s mighty hand, that he may lift you up in due time. <br><em>1 Peter 5:6</em>"
];

function getRandomItem(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const app = express();

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res){
    res
    .json({
        complement: getRandomItem(complements)
    })
    .end();
});

app.get("/verseday", function(req, res){
    res
    .json({
        complement: getRandomItem(verseDay)
    })
    .end();
});

app.use("/public", express.static("./public"));

//app.listen(3000);
const port = process.env.port || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);