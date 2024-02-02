const Class = () => {
    class Animal {
        constructor(color, legs) {
            this.color = color;
            this.legs = legs;
        }
    }
    const animal1=new Animal('brown',4)//object


    class Shape{
        constructor(length, width){
            this.l=length;
            this.w=width;
        }

    }
    class Square extends Shape{
        constructor(length, width){
            super(length,width)
            this.area=this.l*this.w;
            this.perimeter=4*this.l
        }
    }
    class Rectangle extends Shape{
        constructor(length,width){
            super(length,width)
        this.area=this.l*this.w;
        this.perimeter=(2*this.l)+(2*this.w)
        }
    }
    class Cuboid extends Shape{
        constructor(length,width,height){
            super(length, width)
            this.h=height;
            this.volume=this.l*this.w*this.h
            
        }

    }

    //objects for the classes
    const S1=new Square(4,4);
    const R1=new Rectangle(5,4);
    const C1=new Cuboid(10,7,4)
    
    return (
        <div className="btn btn-dark p-3">
        
        <p>Creating Animal class</p>
<p>Color:{" "+animal1.color}</p>
<p>Legs:{" "+animal1.legs}</p>
<h6>For Square:{" Area= "+S1.area+" "}and {" Prerimeter= "+S1.perimeter}</h6>
<h6>For Rectangle:{" Area= "+R1.area+" "}and {" \nPrerimeter= "+R1.perimeter}</h6>
<p>Volume of cuboid is{" "+C1.volume}</p>
<div className='shapes m-5'>
    <div className='shape3 m-5'>End</div>
    <div className='shape4 m-5'>Next</div>
    </div>
        </div>
    )
}
export default Class