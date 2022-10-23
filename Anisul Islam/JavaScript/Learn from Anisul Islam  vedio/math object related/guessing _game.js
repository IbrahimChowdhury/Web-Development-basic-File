



var x = 0, y = 0;

for (var i = 0; i < 5; i++) {

    var guessing_number = parseInt(prompt("guess a number from 1 to 5"));


    var random_number = Math.floor(Math.random() * 6);

    if (guessing_number == random_number) {
        console.log("Hurrah, You  won.");
        x++;
    }

    else {
        console.log("you have lost . try again");
        y++;
    }

}

document.write("You have won  " + x + "  times <br>");
document.write("You have Lost  " + y + "  times <br>");












