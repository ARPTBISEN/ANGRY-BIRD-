class chain{
    constructor(bodyA,bodyB){
     var option={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        lenght:10
     }
     this.chain=Constraint.create(option);

     World.add(world,this.chain);
    }
    display(){
        var a=this.chain.bodyA.position;
        var b=this.chain.bodyB.position;
      line(a.x,a.y,b.x,b.y);
    }
}