class Player {
    constructor() {
        this.index = null;
        this.username = null;
        this.password = null;
    }
    
    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            username:this.username,
            password:this.password
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allplayers = data.val();
        })
    }
    
}