class walker{
    constructor(x,y,width,height){
     var options={
     isStatic:true,
     density:10
     }
     this.x=x
     this.y=y
     this.width=width
     this.height=height
     this.animation=loadAnimation("walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png,")
        this.body=bodies.rectangle(this.x,this.y,this.width,this,height,options)
World.add(world,this.body)
    }
    display(){
     var pos=this.body.position
      
     
     translate(pos.x,pos.y)
     imageMode(CENTER)
     
     image(this.animation,pos.x,pos.y,this.body.width,this.body.height)
     



    }

}