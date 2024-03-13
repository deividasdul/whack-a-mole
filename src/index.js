var gameHasStarted = false;
var randomChosenHole;
var randomChosenAppearTime;
var holes = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

var hole;

$(document).keydown((event) => {
  if (event.key === "s" && !gameHasStarted) {
    $("#game-title").text("Game Started");
    gameHasStarted = true;

    randomChosenHole = Math.floor(Math.random() * 9) + 1;
    hole = holes[randomChosenHole];

    randomChosenAppearTime = Math.floor(Math.random() * 1000) + 1;
    appear(hole, randomChosenAppearTime);


  }
});

$("#one").click(function() {
  var wrongAudio = new Audio("./blue.mp3");
  wrongAudio.play();
})

function smash() {

}

function appear(chosenHole, timer) {
  switch (chosenHole) {
    case "one":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function() {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer)
      break;
    case "two":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function() {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer)
      break;
    case "three":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function() {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer)
      break;
    case "four":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function() {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer)
      break;
    case "five":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function() {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer)
      break;
    case "six":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function() {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer)
      break;
    case "seven":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function() {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer)
      break;
    case "eight":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function() {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer)
      break;
    case "nine":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function() {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer)
      break;
    default:
      console.log("Error");
      break;
  }
}
