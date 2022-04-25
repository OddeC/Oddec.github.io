//Graph Button Data Functions
function start(){
    console.log("start() method started");
    document.getElementById("data").rows["seconds"].innerHTML = "reading data";
    index=0;
    timer=setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
};

function stop() {
    console.log("stop() function started");
    clearInterval(Timer);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
};

//Craps game Start
var wins = 0;
var losses = 0;
var ties = 0;
//Start of Javascript play function
function PlayCraps();
{
    
    console.log("Game of Craps Started..");
    //Limited number generator for dice rolls
    var die1 = Math.ceil(6*Math.random)
    var die2 = Math.ceil(6*Math.random)
    document.getElementById("die1roll").innerHTML = die1;
    document.getElementById("die2roll").innerHTML = die2;
    var RollSum = die1 + die2;
    //Algorithm to produce sum of dice rolls
    document.getElementById("SumRoll").innerHTML = RollSum
    if(RollSum == 7 || Rollsum == 11){
        //algorithm deciding play state based off of product above.
        document.getElementById("CrapsResult").innerHTMl = "Craps, you lose!!"
        losses = losses + 1;
    }else if(die1 == die2 && die1 % 2  == 0){
        document.getElementById("WinResult").innerHTML = "Congrats you win!!";
        wins = wins + 1;

    }else {
        document.getElementbyId("TieResult").innerHTML = "The result is a tie, play again?";
        ties = ties + 1;
    }
    /*scoreboard algorithm*/
    document.getElementById("winRoll").innerHTML = wins;
    document.getElementbyId("lossRoll").innerHTML = losses;
    document.getElementbyId("TieRoll").innerHTML = ties;
}
function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttributes("control","none");
    this.sound.style.display="none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}
function playStation(){
    console.log("playStation() has started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}