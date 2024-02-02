//import React from 'react'

function Encapsulation() {
    
    class student{
        constructor(name,age, adm){
             this.name=name;
             this.age=age;
             this.adm=adm;
        }
    }
    class Form1 extends student{
        #kcpe
        constructor(name,age,adm,kcpe){
            super(name,age,adm)
            this.#kcpe=kcpe

        }
        getKcpe(){
            return this.#kcpe
        }
        setKcpe(kcpe){
            this.#kcpe=kcpe;
        }
    }
    class Form4 extends student{
        #target
        constructor(name,age,adm,target){
            super(name,age,adm)
            this.#target=target;

        }
        getKcse(){
            return this.#target
        }
        setKcse(target){
            this.#target=target;
        }
    }
    const f1=new Form1("James",17,2076,"A")
        f1.setKcpe("A")
    const f4=new Form4("Peter",21,1979,"B+")
    f4.setKcse("A-")

  return (
    <div className=" btn btn-outline-light m-5">
        Encapsulation
        <table>
            <th>Name</th>
            <th>Age</th>
            <th>Entry Grade</th>
            <th>Target</th>
            <tbody>
                <tr>
                    <td>{" "+f1.name}</td>
                    <td>{" "+f1.age}</td>
                    <td>{" "+f1.getKcpe()}</td>
                    <td>{" "+f4.getKcse()}</td>
                </tr>
            </tbody>
        </table>
       
    </div>
  )
}

export default Encapsulation