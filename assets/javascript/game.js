$(document).ready(function () {
    var ranNum = Math.floor(Math.random() * 101 + 19);

    $("#randomNumber").text(ranNum);

    var numOne = Math.floor(Math.random() * 11 + 1);
    var numTwo = Math.floor(Math.random() * 11 + 1);
    var numThree = Math.floor(Math.random() * 11 + 1);
    var numFour = Math.floor(Math.random() * 11 + 1);

    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    $("#totalWins").text(wins);
    $("#totalLosses").text(losses);

    function reset() {
        ranNum = Math.floor(Math.random() * 101 + 19);
        console.log(ranNum);

        $("#randomNumber").text(ranNum);

        numOne = Math.floor(Math.random() * 11 + 1);
        numTwo = Math.floor(Math.random() * 11 + 1);
        numThree = Math.floor(Math.random() * 11 + 1);
        numFour = Math.floor(Math.random() * 11 + 1);

        totalScore = 0;

        $("#finalScore").text(totalScore);
    }
    function youWin() {
        alert("You Win!");
        wins++;
        $("#totalWins").text(wins);
        reset();
    }

    function youLose() {
        alert("You Lose!");
        losses++;
        $("#totalLosses").text(losses);
        reset();
    }
    $("#one").on("click", function () {
        totalScore = totalScore + numOne;
        console.log("Updated Total Score: " + totalScore);
        $("#finalScore").text(totalScore);

        if (totalScore == ranNum) {
            youWin();
        }
        else if (totalScore > ranNum) {
            youLose();
        }
    })

    $("#two").on("click", function () {
        totalScore = totalScore + numTwo;
        console.log("Updated Total Score: " + totalScore);
        $("#finalScore").text(totalScore);

        if (totalScore == ranNum) {
            youWin();
        }
        else if (totalScore > ranNum) {
            youLose();
        }
    })

    $("#three").on("click", function () {
        totalScore = totalScore + numThree;
        console.log("Updated Total Score: " + totalScore);
        $("#finalScore").text(totalScore);

        if (totalScore == ranNum) {
            youWin();
        }
        else if (totalScore > ranNum) {
            youLose();
        }
    })

    $("#four").on("click", function () {
        totalScore = totalScore + numFour;
        console.log("Updated Total Score: " + totalScore);
        $("#finalScore").text(totalScore);

        if (totalScore == ranNum) {
            youWin();
        }
        else if (totalScore > ranNum) {
            youLose();
        }
    });

});


// function randomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   var target = randomInRange(19, 120);

//   var numberOptions = [
//     randomInRange(1, 12),
//     randomInRange(1, 12),
//     randomInRange(1, 12),
//     randomInRange(1, 12)
//   ];