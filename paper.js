class Paper
{
	constructor(r)
	{
		var options={
			isStatic:false,
            density: 1.2			
			}
        this.body = Bodies.circle(200,600,r,options)
        World.add(world, this.body);
        this.paper = loadImage("paper.png");
    }
    display()
	{
		image (this.paper, this.body.position.x, this.body.position.y, 70,70);  
        



    }

    }