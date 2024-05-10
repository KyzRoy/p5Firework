class Circle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.r = random(50, 30);
      this.dr = random(1, 1);
      this.limit = 5;
      this.fall = false; 
      this.done = false
      
      this.num = floor(random(30, 50));
      
      this.colors = ["#abcd5e", "#14976b", "#2b67af", "#62b6de", "#f589a3", "#ef562f", "#fc8405", "#f9d531","#FFFF33", "#FFFFFF", "CC0000"];
      this.c = random(this.colors);
      
      this.shape = [];
      for (let i=0; i<this.num; i++) {
        let angle = 360/this.num * i;
        let pos = this.circleEqn(angle, this.r);
        this.shape[i] = new Particle(pos.x, pos.y, this.c);
      }
      
      
    }
    
    updateCircle() {
      for (let i=0; i<this.num; i++) {
        let angle = 360/this.num * i;
        
        if (this.fall == false) {
          this.shape[i].position = this.circleEqn(angle, this.r);
        } else {
          this.shape[i].updateParticle();
        }
        
      }
      
      if (this.r > this.limit) {
        this.r -= this.dr;
      } else {
        this.fall = true;
      }
      
    }
    
    displayCircle() {
      push();
      translate(this.x, this.y);
      
      let sum = 0;
      for (let i=0; i<this.num; i++) {
        this.shape[i].displayParticle();
        
        if (this.shape[i].offScreen() == true) {
          sum += 1;
        }
        
      }
  
      if (sum == this.num) {
        this.done = true;
      }
      pop();
    }
    
    circleEqn(angle, r) {
      let x = r*cos(angle);
      let y = r*sin(angle);
  
      return createVector(x, y);
  
    }
  }