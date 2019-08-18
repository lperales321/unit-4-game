$(document).ready(function () {

    let numberToGuess = 0;
    let totalScore = 0;
    let totalWins = 0;
    let totalLosses = 0;
    let crystal1Value = 0;
    let crystal2Value = 0;
    let crystal3Value = 0;
    let crystal4Value = 0;

    resetGame();


    function resetGame() {
        //Choose random number from 19-120
        numberToGuess = Math.floor(Math.random() * (121 - 19) ) + 19;
        $('#numberToGuess').text(numberToGuess);

        //Total Scores
        totalScore = 0;
        $('#totalScore').text(totalScore);
        $('#totalWins').text(totalWins);
        $('#totalLosses').text(totalLosses);

        //Choose random number from 1-12
        crystal1Value = Math.ceil(Math.random() * 12);
        crystal2Value = Math.ceil(Math.random() * 12);
        crystal3Value = Math.ceil(Math.random() * 12);
        crystal4Value = Math.ceil(Math.random() * 12);
    }

    function calculateNewScore(crystalValue) {
        totalScore += crystalValue;
        $('#totalScore').text(totalScore);
        compareToNumber();
    }

    function compareToNumber() {
        if (numberToGuess - totalScore == 0) {
            totalWins++;
            $('#message').text("Congratulations! You Win!");
            resetGame();
        }
        else if (numberToGuess - totalScore < 0) {
            totalLosses++;
            $('#message').text(`Game Over. Your score of ${totalScore} did not match ${numberToGuess}`);
            resetGame();
        }
    };

    $('#crystal1').on("click", function(){
        calculateNewScore(crystal1Value);
    });

    $('#crystal2').on("click", function(){
        calculateNewScore(crystal2Value);
    });

    $('#crystal3').on("click", function(){
        calculateNewScore(crystal3Value);
    });

    $('#crystal4').on("click", function(){
        calculateNewScore(crystal4Value);
    });

});