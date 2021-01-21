class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display() {
      if (this.body.speed < 3) {
        super.display()
      }
      else {
        World.remove(world, this.body)
        push()
        this.Visiblity = this.Visiblity-5
        tint(255, this.Visiblity)
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        pop()
      }
      
  
    }

    score () {
      if (this.Visiblity<0 && this.Visiblity>-105) {
        score++;
      }

      blocks1.score();
      blocks2.score();
      blocks3.score();
      blocks4.score();
      blocks5.score();
      blocks6.score();
      blocks7.score();
      blocks8.score();
      blocks9.score();

    }
}