class Snow {
    constructor(x,y){
        var options = {
            friction : 0.01,
            density : 0.1,
        }
        
        this.snow = Matter.Bodies.circle(x,y,50,options)
            this.r = 50;
            this.image = loadImage("snow5.webp");
            World.add(world, this.snow);
    }
    
    display() {
        imageMode(CENTER);
        image(this.image,this.snow.position.x,this.snow.position.y,this.r,this.r)
    }

    updateY(){
        if(this.snow.position.y > height){
            Matter.Body.setPosition(this.snow,{x:random(10,1190),y:random(-300,0)})
        }
    }
}