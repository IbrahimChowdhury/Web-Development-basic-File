/*    task 2  ----  create a function called highestRunScorer that will
                                -receive a 2d arrey called playersinfo
                                -based on highest score, return the name of the player */

function highestRunScorer(n1, n2) {

    var x = [];

    document.write("player" + "        " + " Score  <br><br>");
    for (var i = 0; i < n1; i++) {
        x[i] = []
        for (var j = 0; j < n2; j++) {
            var p;
            p = prompt("x[" + i + "][" + j + "]");
            x[i][j] = p;
        }
    }


    for (var i = 0; i < n1; i++) {

        document.write( x[i][0] + "       " + x[i][1] + "<br>");


    }

    var highScorer = x[0][0];
    var highScore = x[0][1];
    for (var i = 1; i < n1; i++) {

        if (highScore < x[i][1]) {
            highScore = x[i][1];
            highScorer = x[i][0];
        }

    }

    document.write("<br><br><br> HighestScorer = " + highScorer + "   and the  score is " + highScore);

}



highestRunScorer(5, 2);








