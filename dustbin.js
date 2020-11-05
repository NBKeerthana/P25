class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=254;
		this.dustbinHeight=100;
		this.wallThickness=334;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
		this.image = loadImage("dustBin.png");
		World.add(world, this.bottomBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;

			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			image(this.image,0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}