class Disk{
    constructor(x, y){
        var options = {
            isStatic: false,
            density: 1,
            restitution: 0.3
        }

        
        this.body = Bodies.circle(x, y, 30, options);
        this.radius = 30;
        this.gameState = "set";

        World.add(world, this.body);
        
    }

    

    display(){
        
        
        push();
            fill("red");
            var pos = this.body.position;
            ellipseMode(RADIUS);
            ellipse(pos.x, pos.y, this.radius);
            
        pop();   
    }
}