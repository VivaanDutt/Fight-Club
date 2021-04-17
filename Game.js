class Game {
    constructor() {
}
    
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    start() {
        if(gameState === 0) {
            player = new Player();
            form = new Form();
            form.display();
        }
        fighter1 = createSprite(displayWidth, displayHeight, 10, 20);
        fighter2 = createSprite(displayWidth - 20, displayHeight, 10, 20);
    }

    play() {
        form.hide();
        Player.getPlayerInfo();
        background("black");
        drawSprites();
    }
}