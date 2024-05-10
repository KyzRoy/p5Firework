class Particle {
    constructor(x, y, c) {
      this.position = createVector(x, y);
      // this.velocity = createVector(0, 0);
      this.velocity = p5.Vector.random2D().mult(random(1, 2));
      this.acceleration = createVector(0, 0);
      
      this.c = c;
      this.d = random(1, 10);
    }
    
    updateParticle() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
    
    displayParticle() {
      noStroke();
      fill(this.c);
      ellipse(this.position.x, this.position.y, this.d, this.d);
    }
    
    offScreen() {
      if (this.position.y > height  || this.position.x > width) {
        return true;
      } else {
        return false;
      }
    }
  }