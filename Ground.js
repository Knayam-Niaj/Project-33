class Ground{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    remove(){
        Matter.World.remove(world, this.body);
    }

    add(){
        World.add(world, this.body);
    }

    display(){
        push();
            var pos = this.body.position;
            fill("grey");
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}