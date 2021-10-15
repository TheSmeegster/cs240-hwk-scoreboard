let currentInning = 0;
let currentTeam = "Away";
let awayRuns = [0, 0, 0, 0, 0, 0, 0];
let homeRuns = [0, 0, 0, 0, 0, 0, 0];
let awayTotal = 0;
let homeTotal = 0;
let awayRunsTable = document.getElementsByClassName("Away");
let homeRunsTable = document.getElementsByClassName("Home");
let imageSlot = document.querySelector("img");

//Plays a random song and displays a random image
function playMusic(){
    let songNum = Math.random();
    let music;
    let imageNum = Math.random() * 3;
    if(songNum > .6){
        music = new Audio('sounds/charge1.mp3')
    } else if(songNum > .3){
        music = new Audio('sounds/buildup.mp3')
    } else {
        music = new Audio('sounds/charge2.mp3')
    }

    if(imageNum >= 2){
        imageSlot.src = "images/sdchicken.jpg";
    } else if(imageNum >= 1){
        imageSlot.src = "images/megaphone.png"
    } else {
        imageSlot.src = "images/ups.png"
    }
    music.play();
}

//Plays the chicken dance and switches the image to the chicken dancing
function playPiano(){
    console.log("piano");
    let piano = new Audio('sounds/chickendance.mp3')
    piano.play();
    imageSlot.src = "images/sdchicken.jpg"
}

//Adds a run to the selected team at the selected inning
function addRun(){
    if(currentTeam == "Away"){
        awayRuns[currentInning]++;
        awayTotal++;
        awayRunsTable[currentInning]++;
        awayRunsTable[currentInning].innerHTML = awayRuns[currentInning];
    } else {
        homeRunsTable[currentInning]++;
        homeRuns[currentInning]++;
        homeTotal++;
        homeRunsTable[currentInning].innerHTML = homeRuns[currentInning];
    }
    updateTotal();
}

//Removes a run from the selected team at the selected inning
function removeRun(){
    if(currentTeam == "Away"){
        awayRuns[currentInning]--;
        awayRunsTable[currentInning]--;
        awayTotal--;
        awayRunsTable[currentInning].innerHTML = awayRuns[currentInning];
    } else {
        homeRunsTable[currentInning]--;
        homeRuns[currentInning]--;
        homeTotal--;
        homeRunsTable[currentInning].innerHTML = homeRuns[currentInning];
    }
    updateTotal();
}

//Switches the current inning
function newInning(inning){
    currentInning = inning - 1;
}

//Switches selected team
function switchTeams(team){
    currentTeam = team;
}

//Updates total runs for each team
function updateTotal(){
    let homeTotalTable = document.getElementsByName("HomeTotal");
    homeTotalTable[0].innerHTML = homeTotal;
    let awayTotalTable = document.getElementsByName("AwayTotal");
    awayTotalTable[0].innerHTML = awayTotal;
}