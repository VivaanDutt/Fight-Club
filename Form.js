class Form {
    constructor() {
        this.input1 = createInput("Username");
        this.input2 = createInput("Password");
        this.button = createButton("Login");
        this.title = createElement('h2');
    }

    hide() {
        this.input1.hide();
        this.input2.hide();
        this.title.hide();
        this.button.hide();
    }

    display() {
        this.title.html("FIGHT CLUB");
        this.title.position(displayWidth/2, 10);

        this.input1.position(7/8 * displayWidth - 100, 1/5 * displayHeight);
        this.input2.position(7/8 * displayWidth - 100, 1/4 * displayHeight);
        this.button.position(7/8 * displayWidth - 100, 1/3 * displayHeight - 25);

        this.button.mousePressed(()=>{
            player.username = this.input1.value();
            player.password = this.input2.value();
            player.update();
        })
    }
}