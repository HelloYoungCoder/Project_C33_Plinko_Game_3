class Division {

    constructor(x, y, w, h){

        var options = {
            'isStatic': true
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        World.add(myworld, this.body);
    }

    display() {

        var pos = this.body.position;

        rectMode(CENTER);

        rect(pos.x, pos.y, this.w, this. h)

    }

};