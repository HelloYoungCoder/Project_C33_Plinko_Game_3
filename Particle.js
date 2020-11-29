class Particle {

    constructor(x, y, r){

        var options = {
            'restitution': 0.4
        };

        this.body = Bodies.circle(x, y, 10, options);
        
        this.x = x;
        this.y = y;
        this.r = 10;

        this.color = color(random(0, 255), random(0, 255), random(0, 255));

        World.add(myworld,this.body);

    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();//Save current setting & transformation
        
        translate(pos.x,pos.y);//Change from origin to x any y position
        rotate(angle);//Rotate objects 

        noStroke();

        //rectMode(CENTER);
        fill(this.color);
        ellipse(0, 0, this.r, this.r);//Set to origin
        
        pop();//restore the settings

    }

}