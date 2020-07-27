
	class paper {
		constructor(x, y) {
		  var options = {
			  'isStatic':true,
			  'friction':1.0,
			  'density':1.0
		  }
		  this.body = Bodies.rectangle(x, y, 100, 100, options);
		  this.width = 100;
		  this.height = 100; 
		  
		  World.add(world, this.body);
		}
		display(){
		  var pos =this.body.position;
		  var angle=this.body.angle;
		  push();
		  translate(pos.x,pos.y);
		  rotate(angle);
	  
		  ellipseMode(CENTER);
		  stroke("Red");
		  strokeWeight(8);
		  fill("pink");
		 ellipse(pos.x,pos.y,40);
	  
		 pop();
		}
	  };
	  
 
	