const express = require("express")
const path = require("path")

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
]

const insults = [
  "You like shit today",
  "That dress looks awful on you",
  "Have you been getting weight?",
  "You can do hard things - half way",
  "You've gotten far in this course. Without understanding anything",
  "You're programming! How cool is that? in your age...",
  "I'm really disappointed of you",
  "You made just this?",
  "You've learned a lot of easy things, and that's really easy to do"
]

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length)
  return complements[randomIndex];
}

function getRandomInsult() {
  const randomIndex = Math.floor(Math.random() * insults.length)
  return insults[randomIndex]
}


const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
})

app.get("/insult", function(req, res) {
  res
    .json({
      insult: getRandomInsult()
    })
    .end()
})

app.use("/public", express.static("./public"))




app.listen(5500);
console.log("listening on http://localhost:5500")