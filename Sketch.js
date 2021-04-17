var player;
var game;
var gameState = 0;
var form;
var fighter1, fighter2;
var database;

function preload() {
    
}

function setup() {
    createCanvas(displayWidth - 20, displayHeight-30);
    // form = new Form();
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    // form.display();
    game.update(1);
    if(gameState === 1) {
        clear();
        game.play();
    }
}