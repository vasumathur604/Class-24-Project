class Iron{
	constructor(x,y,height,width,stonepos)
	{
		var options={
			restitution:0.8,
			friction:3,
			density:30
		}

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;

	World.add(world, this.body);

	}
	display()
	{
        var stonepos=this.body.position;		
        push()
     translate(this.body.position.x,this.body.position.y);
    
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill(181,101,29);
        //draw the ellipse here to display the stone
        rect(0,0,this.height,this.width);
        pop()}


      
}
		