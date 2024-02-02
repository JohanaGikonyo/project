//import React from 'react'

function Polymorphism() {
    class Animals{
        constructor(color,legs,){
            this.color=color;
            this.legs=legs;
        }

        makesound(){
            return (<p>Noisy</p>)
        }
    }
    class Cat extends Animals{
        constructor(color,legs,weight){
            super(color,legs)
            this.weight=weight;
        }
        makesound(){
            return (<p>Moew</p>)
        }
    }

    class Dog extends Animals{
        constructor(color,legs,height){
            super(color,legs)
            this.weight=height;
        }
        makesound(){
            return (<p>Barking i.e Bwee</p>)
        }
    }
    const A1=new Animals("brown",4)
    const cat1=new Cat("brown",4,"20kg")
    const dog1=new Dog("black",4,"0.5m")
  return (
    <div className="btn btn-outline-light m-5">
        <p>Polymorphism</p>
        <h6>{A1.makesound()}</h6>
        <small>Cat:{" "+cat1.color+" "}{" "+cat1.legs+" "}legs{" "+cat1.weight+" "}Sound:{cat1.makesound()}</small>
        <small>Dog:{" "+dog1.color+" "}{" "+dog1.legs+" "}legs{" "+dog1.weight+" "}Sound:{dog1.makesound()}</small>
        
    </div>
  )
}

export default Polymorphism