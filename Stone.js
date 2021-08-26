class Stone{
	constructor(x,y,height,width)
	{
		var options={
			restitution:0.8,
			friction:0.9,
			density:12
		}
	
		this.body = Bodies.rectangle(x,y,38,38,options);
        this.height = 38;
        this.width = 38;

        World.add(world, this.body);

	}
	display()
	{
        //var stonepos=this.body.position;		
        push()
     translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("pink");
        rect(0,0,this.height,this.width);
        pop()}
    }

