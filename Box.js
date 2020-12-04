class Box extends BaseClass{
  constructor(x, y, width, height) {
    // parent is known as super in child class
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
 
};
