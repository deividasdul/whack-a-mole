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
var score = 0;

$(document).keydown((event) => {
  if (event.key === "s" && !gameHasStarted) {
    $("#game-title").text("Game Started");
    $("#score").removeClass("hidden").text(`Score: ${score}`);
    gameHasStarted = true;

    randomChosenHole = Math.floor(Math.random() * 9) + 1;
    hole = holes[randomChosenHole];

    randomChosenAppearTime = Math.floor(Math.random() * 1000) + 500;
    appear(hole, randomChosenAppearTime);
  }
});

$(".grid-container div").click(function () {
  var userClickedHole = $(this).attr("id");

  console.log(userClickedHole);
  console.log(randomChosenHole);

  if (userClickedHole === hole) {
    score++;
    $("p").text(`Score: ${score}`);
    scream.play();

    randomChosenHole = Math.floor(Math.random() * 8) + 1;
    hole = holes[randomChosenHole];

    randomChosenAppearTime = Math.floor(Math.random() * 1000) + 1;
    appear(hole, randomChosenAppearTime);
  }
  else {
    console.log("Le epic fail");
  }
});

var scream = new Audio("./sounds/blue.mp3");

// Plays Sounds When User Clicks a Hole
function playSound(clickedHole) {
  switch (clickedHole) {
    case "one":
      scream.play();
      break;
    case "two":
      scream.play();
      break;
    case "three":
      scream.play();
      break;
    case "four":
      scream.play();
      break;
    case "five":
      scream.play();
      break;
    case "six":
      scream.play();
      break;
    case "seven":
      scream.play();
      break;
    case "eight":
      scream.play();
      break;
    case "nine":
      scream.play();
      break;
  }
}

// Makes Wild Peciulis to Appear and Dissapear (Randomized)
function appear(chosenHole, timer) {
  switch (chosenHole) {
    case "one":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function () {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer);
      break;
    case "two":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function () {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer);
      break;
    case "three":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function () {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer);
      break;
    case "four":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function () {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer);
      break;
    case "five":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function () {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer);
      break;
    case "six":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function () {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer);
      break;
    case "seven":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function () {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer);
      break;
    case "eight":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function () {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer);
      break;
    case "nine":
      $("#" + chosenHole).addClass("active-hole");
      setTimeout(function () {
        $("#" + chosenHole).removeClass("active-hole");
      }, timer);
      break;
    default:
      console.log("Error");
      break;
  }
}
