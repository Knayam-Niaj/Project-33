class Pole{
    constructor(x, y){
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 15, options);
        this.radius = 15;

        World.add(world, this.body);
    }

    display(){
        push();
            fill("teal")
            ellipseMode(RADIUS);
            var pos = this.body.position;
            ellipse(pos.x, pos.y, this.radius);
        pop();
    }
}