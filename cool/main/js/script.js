const wheel = document
    .getElementById('wheel');
const disRun1 = document
    .getElementById('runs-p1');
const disRun2 = document
    .getElementById('runs-p2');
const disWicket1 = document
    .getElementById('wickets-p1');
const disWicket2 = document
    .getElementById('wickets-p2');
const disMessage = document
    .getElementById('dis-message');
const disP1name = document
    .getElementById('p1-name');
const disP2name = document
    .getElementById('p2-name');
const disTurnMessage = document
    .getElementById('turn-message');
const xtraMsg = document
    .getElementById('xtra-msg');
const gamePg = document
    .getElementById('game-pg');
const firstPg = document
    .getElementById('first-pg');

var firsPgVisible = true;

function start() {

    var nameP1 = document
        .getElementById('nameP1').value;
    var nameP2 = document
        .getElementById('nameP2').value;

    if (nameP1 == "") {
        nameP1Org = "Player 1";
    } else {
        nameP1Org = nameP1;
    }

    if (nameP2 == "") {
        nameP2Org = "Player 2";
    } else {
        nameP2Org = nameP2;
    }

    if (firsPgVisible) {
        firstPg.style.display = "none";
        gamePg.style.display = "block";
        firsPgVisible = false;
    } else {
        firstPg.style.display = "block";
        gamePg.style.display = "none";
        firsPgVisible = true;
    }

    disP1name.innerHTML = nameP1Org;
    disP2name.innerHTML = nameP2Org;
    disTurnMessage.innerHTML =
        "This is " + nameP1Org +
        "'s turn..";
}

var P1Turn = true;

var run = 0;
var wicket = 0;
var runP1 = 0;
var runP2 = 0;
var wicketP1 = 0;
var wicketP2 = 0;

function r_w_m(r, w, m) {
    if (P1Turn) {
        runP1 += r;
        wicketP1 += w;
        run = runP1;
        wicket = wicketP1;
    } else {
        runP2 += r;
        wicketP2 += w;
        run = runP2;
        wicket = wicketP2;
    }
    message = m;
}

function get_random_number() {
    return Math.floor(Math.random() *
        360);
}

var positive = true;
const posRotate = 10800;
const negRotate = -11160;
var totalRotate = null;

function get_result(runP, wicketP,
    disRunP, disWicketP) {
    if (wicketP < 10) {

        var randomNumber =
            get_random_number();

        if (positive) {
            totalRotate = "rotate(" + (
                posRotate + parseInt(
                    randomNumber)) + "deg)";
            positive = false;

        } else {
            totalRotate = "rotate(" + (
                negRotate + parseInt(
                    randomNumber)) + "deg)";
            positive = true;
        }

        wheel.style.transform =
            totalRotate;

        if (0 < randomNumber &&
            randomNumber < 45) {
            r_w_m(3, 0,
                "3 runs.Good understanding.");
        } else if (45 < randomNumber &&
            randomNumber < 90) {
            r_w_m(2, 0, "Quick double!");
        } else if (90 < randomNumber &&
            randomNumber < 135) {
            r_w_m(0, 1, "Opps! Run out!");
        } else if (135 < randomNumber &&
            randomNumber < 180) {
            r_w_m(1, 0, "Just a single");
        } else if (180 < randomNumber &&
            randomNumber < 225) {
            r_w_m(4, 0,
                "Massive! It's a boundary!");
        } else if (225 < randomNumber &&
            randomNumber < 270) {
            r_w_m(0, 1,
                "What a ball! Clean bold.");
        } else if (270 < randomNumber &&
            randomNumber < 315) {
            r_w_m(6, 0,
                "Phenomenal! Six Six Six..");
        } else if (315 < randomNumber &&
            randomNumber < 360) {
            r_w_m(0, 1,
                "Excellent catch! Catch out.");
        } else {
            r_w_m(0, 0, "Dott ball...");
        }

        disMessage.innerHTML =
            ".....................";

        setTimeout(function () {
            if (run > 1) {
                disRunP.innerHTML = "Runs:" +
                    run;
            } else {
                disRunP.innerHTML = "Run:" +
                    run;
            }
            if (wicket > 1) {
                disWicketP.innerHTML =
                    "Wickets:" + wicket;
            } else {
                disWicketP.innerHTML =
                    "Wicket:" + wicket;
            }
            disMessage.innerHTML = message;
        }, 3000);
    }
}

var gameWon = false;

function reset() {
    runP2 = 0;
    runP1 = 0;
    wicketP2 = 0;
    wicketP1 = 0;
    disTurnMessage.innerHTML =
        "Now it is " + nameP2Org +
        "'s turn..";
    xtraMsg.innerHTML = "";
    disMessage.innerHTML =
        "<h4>Tap Play button</h4>";
    disP1name.innerHTML = nameP1Org;
    disP2name.innerHTML = nameP2Org;
    disRun1.innerHTML = "Run:0";
    disWicket1.innerHTML = "Wicket:0";
    disRun2.innerHTML = "Run:0";
    disWicket2.innerHTML = "Wicket:0";
    gameWon = false;
}

function get_winner() {
    if (runP1 > runP2 && wicketP1 <
        wicketP2 && wicketP2 == 10) {
        disMessage.innerHTML = "<h2>" +
            nameP1Org + "</h2>";
        xtraMsg.innerHTML =
            "<h6>Congratulations.You are the winner of this match.<br>Here is your champion trophy<h1>🏆</h1></h6>";
        disTurnMessage.innerHTML =
            "Start New Game to play another match.";
        gameWon = true;
    } else if (runP2 > runP1 &&
        wicketP2 < wicketP1 && wicketP1 ==
        10) {
        disMessage.innerHTML = "<h2>" +
            nameP2Org + "</h2>";
        xtraMsg.innerHTML =
            "<h6>Congratulations.You are the winner of this match.<br>Here is your champion trophy<h1>🏆</h1></h6>";
        disTurnMessage.innerHTML =
            "Start New Game to play another match.";
        gameWon = true;
    } else if (runP1 == runP2 &&
        wicketP1 == wicketP2 && wicketP1 ==
        10) {
        xtraMsg.innerHTML =
            "<h6>Draw in cricket is rare.Trophy for you guyes.<br><h1>🏆🏆</h1></h2>";
        disMessage.innerHTML =
            "Both are winner";
        disTurnMessage.innerHTML =
            "Start New Game to play another match.";
        gameWon = true;
    } else if (wicketP1 == wicketP2 &&
        wicketP2 == 10 && runP1 > runP2) {
        disMessage.innerHTML = "<h2>" +
            nameP2Org + "</h2>";
        xtraMsg.innerHTML =
            "<h6>Congratulations.You are the winner of this match.<br>Here is your champion trophy<h1>🏆</h1></h6>";
        disTurnMessage.innerHTML =
            "Start New Game to play another match.";
        gameWon = true;
    } else if (wicketP2 == wicketP1 &&
        wicketP1 == 10 && runP2 > runP1) {
        disMessage.innerHTML = "<h2>" +
            nameP2Org + "</h2>";
        xtraMsg.innerHTML =
            "<h6>Congratulations.You are the winner of this match.<br>Here is your champion trophy<h1>🏆</h1></h6>";
        disTurnMessage.innerHTML =
            "Start New Game to play another match.";
        gameWon = true;
    }
}

function rotate() {
    if (P1Turn && !gameWon) {
        get_result(runP1, wicketP1,
            disRun1, disWicket1);
        if (wicketP2 < 10) {
            P1Turn = false;
            disTurnMessage.innerHTML =
                nameP1Org + " is playing....";
            setTimeout(function () {
                disTurnMessage.innerHTML =
                    "Now it is " + nameP2Org +
                    "'s turn..";
            }, 3000);
        } else {
            P1Turn = true;
            disTurnMessage.innerHTML =
                nameP1Org + " is playing....";
            setTimeout(function () {
                disTurnMessage.innerHTML =
                    "Now it is " + nameP1Org +
                    "'s turn..";
            }, 3000);
            xtraMsg.innerHTML = nameP2Org +
                " you have no wicket. Now only " +
                nameP1Org + " can play until " +
                nameP1Org + " wins or loses.";
        }
    } else if (!P1Turn && !gameWon) {
        get_result(runP2, wicketP2,
            disRun2, disWicket2);
        if (wicketP1 < 10) {
            P1Turn = true;
            disTurnMessage.innerHTML =
                nameP2Org + " is playing....";
            setTimeout(function () {
                disTurnMessage.innerHTML =
                    "Now it is " + nameP1Org +
                    "'s turn..";
            }, 3000);

        } else {
            P1Turn = false;
            disTurnMessage.innerHTML =
                nameP1Org + " is playing....";
            setTimeout(function () {
                disTurnMessage.innerHTML =
                    "Now it is " + nameP2Org +
                    "'s turn..";
            }, 3000);
            xtraMsg.innerHTML = nameP1Org +
                " you have no wicket. Now only " +
                nameP2Org + " can play until " +
                nameP2Org + " wins or loses.";
        }
    }
    setTimeout(function () {
        get_winner();

    }, 3000);
}