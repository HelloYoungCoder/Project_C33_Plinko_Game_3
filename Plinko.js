class Plinko {

    constructor(x, y){

        var options = {
            'isStatic': true
        }

        this.body = Bodies.circle(x, y, 10, options);
        
        this.x = x;
        this.y = y;
        this.r = 10;

        World.add(myworld,this.body);

    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();//Save current setting & transformation
        translate(pos.x,pos.y);//Change from origin to x any y position
        rotate(angle);//Rotate objects 
        rectMode(CENTER);
        fill(77, 133, 176);
        ellipse(0, 0, 10, 10);//Set to origin
        pop();//restore the settings

    }

}