class Bird{
    contructor(x,y){
        var option={
            'density':1.5,
            'friction':1.0,
            'restitution':0.5
        };
        this.body = bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        this.image = loadImage("sprites/bird.png");
        World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        
        Push();
        translate(pos.x,pos.y);
        strokeWeight(3);
        rotate(angle);
        stroke("blue");
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        Pop();
    };
};