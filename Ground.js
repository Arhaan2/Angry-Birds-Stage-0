class Ground 
{
  constructor(x, y, width, height) 
  {
    var options =
     {
       //Make the ground static 
        isStatic:true
    }
    //Create the object with Bodies
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //Add the object to the world
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    rectMode(CENTER);
    fill(255);
    //Draw the Object on the Screen
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
};
