class Log
{
    constructor(x, y, height, angle )
    {
        var options = 
        {
            'restitution': 0.3,
            'friction': 1.0,
            'density': 0.2,
        }

        this.body = Bodies.rectangle(x, y, 20,height, options);
        this.height = height;
        this.width = 20;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        
        strokeWeight(4);
        stroke("green");

        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height );
        pop();
    }
}    