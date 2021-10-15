function playMusic(){
    let songNum = Math.random();
    let music;
    if(songNum > .6){
        music = new Audio('sounds/charge1.mp3')
    } else if(songNum > .3){
        music = new Audio('sounds/buildup.mp3')
    } else {
        music = new Audio('sounds/charge2.mp3')
    }
    music.play();
}

function playPiano(){
    console.log("piano");
    let piano = new Audio('sounds/chickendance.mp3')
    piano.play();
}

let currentInning = 1;
let currentTeam = "Away";
let awayRuns = [0, 0, 0, 0, 0, 0, 0];
let homeRuns = [0, 0, 0, 0, 0, 0, 0];
let awayTotal = 0;
let homeTotal = 0;

function addRun(){
    if(currentTeam == "Away"){
        awayRuns[currentInning]++;
        awayTotal++;
    } else {
        homeRuns[currentInning]++;
        homeTotal++;
    }
}

function removeRun(){
    if(currentTeam == "Away"){
        awayRuns[currentInning]--;
        awayTotal--;
    } else {
        homeRuns[currentInning]--;
        homeTotal--;
    }
}

function newInning(inning){
    currentInning = inning;
    console.log(currentInning);
}

function switchTeams(team){
    currentTeam = team;
    console.log(currentTeam);
}