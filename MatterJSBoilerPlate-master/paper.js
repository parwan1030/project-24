class Paper {
    constructor(x, y, width, height) {

        var options = {

            restitution: 0.5,
            friction: 1,
            density: 1

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
    }

    update() {

        if (keyWentDown("space")) {
            Matter.Body.applyForce(this.body, this.body.position, { x: 65, y:-100});
        }
    }
}