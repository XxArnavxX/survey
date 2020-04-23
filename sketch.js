var database;

function setup(){
    createCanvas(800, 800);
    database = firebase.database();
    console.log(database);
}

function draw(){
    background("white");
}