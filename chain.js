class Chain{
    constructor(bodyAObj,bodyBObj){
        var options={
            bodyA:bodyAObj,
            bodyB:bodyBObj,
            stiffness:0.2,
            length:10
        };
        this.chain=Matter.Constraint.create(options)
        World.add(world, this.chain);
        console.log(this.chain);
    }
    display(){
         var x1= this.chain.bodyA.position.x
         var y1 = this.chain.bodyA.position.y
         var x2= this.chain.bodyB.position.x
         var y2 = this.chain.bodyB.position.y
         push();
         strokeWeight(4);
         line(x1,y1,x2,y2);
       pop();
    }
}