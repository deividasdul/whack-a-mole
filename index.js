var gameHasStarted = false;
var randomChosenHole;
var randomChosenAppearTime;
var hole;
var score = 0;
var userClickedHole;
var scream = new Audio("./sounds/blue.mp3");
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
  userClickedHole = $(this).attr("id");

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
  } else {
    console.log("Le epic fail");
  }
});

// Plays Sounds When User Clicks a Hole
function playSound(clickedHole) {
  scream.play();
}

// Makes Wild Peciulis to Appear and Dissapear (Randomized)
function appear(chosenHole, timer) {
  $("#" + chosenHole).addClass("active-hole");
  setTimeout(function () {
    $("#" + chosenHole).removeClass("active-hole");
  }, timer);
}
