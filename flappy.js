// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(400, 400, Phaser.AUTO, 'game', stateActions);
var score = 12;
score = score+1;
//alert (score);
var player;


/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
game.load.image("playerImg", "assets/flappy.png");
game.load.audio ("score", "assets/point.ogg");

}


/*
 * Initialises the game. This function is only called once.
 */
function create() {

    game.stage.setBackgroundColor("00FF00");
    game.add.text(100, 160, "James Bond :)",//text


        {
            font: "30px Arial", //font size and typeface
            fill: "#FFFF00"
        } //text colour
    );
var x = 100;
    var y = 100;

    player = game.add.sprite(x, y, "playerImg");
    //game.add.sprite(20, 350, "playerImg");
    //game.add.sprite(350, 350, "playerImg")
    //game.add.sprite(20, 20, "playerImg")
    game.add.audio ("score");

    game.input.onDown.add(clickHandler);

    game.input
        .keyboard
        .addKey(Phaser.Keyboard.RIGHT)
        .onDown.add(moveRight);

    game.input
        .keyboard
        .addKey(Phaser.Keyboard.LEFT)
        .onDown.add(moveLeft);

    game.input
        .keyboard
        .addKey(Phaser.Keyboard.DOWN)
        .onDown.add(moveDown);

    game.input
        .keyboard
        .addKey(Phaser.Keyboard.UP)
        .onDown.add(moveUp);
}

function moveLeft()
{
    player.x = player.x - 50;

}
function moveRight()
{
    player.x = player.x + 50;

}
function moveDown()
{
    player.y = player.y + 50;

}
function moveUp()
{
    player.y = player.y - 50;

}


function clickHandler() {
    game.add.sprite (Math.random()*400, Math.random()*350, 'playerImg');
    game.sound.play("score");

}
function spaceHandler(){
    game.sound.play("score");
}


 //* This function updates the scene. It is called for every new frame.
// */
function update() {

}

