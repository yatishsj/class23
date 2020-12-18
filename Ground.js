class  Ground
{
    constructor()
    {
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(200,400,400,20,options);
        this.width=400;
        this.height=20;
        World. add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER)
        fill ("GREEN")
        rect(pos.x,pos.y,this.width,this.height)
    }
}