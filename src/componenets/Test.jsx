import { useEffect, useState } from 'react'
import pdf from './files/pdf2.pdf'


function Test() {
  const [time,setTime]= useState(new Date())
  const [out, setout]=useState()
  const [days, setdays]=useState(60)
  const [open, setopen]=useState(false)
  const [product, setproduct]=useState(false)
  const [text, setText]=useState("")
  useEffect(()=>{
    const settingtime=setInterval(()=>{
      
      if(days<=0){
        setdays(0)
      }
      else{
        setdays(days-1)
      }
      setTime(new Date())
    },1000)
    return ()=>clearInterval(settingtime)
  },[days])

  useEffect(()=>{
    const timeout=setTimeout(()=>{
          setout("I am setTimeOut function. I appear after 5 seconds")
    },5000)
    return ()=> clearTimeout(timeout)
  },[])
  useEffect(() => {
    const handleOutsideclick = (event) => {
      if ((open||product) && event.target.closest('.description') === null && event.target.closest('.products') === null) {
        setopen(false);
        setproduct(false);
      }
    };
  
    if (open||product) {
      document.addEventListener('click', handleOutsideclick);
    }
  
    return () => document.removeEventListener('click', handleOutsideclick);
  }, [open,product]);
  
  function handleClick(e) {
    const { nodeName, textContent } = e.target;
    if (nodeName === 'BUTTON') {
      console.log(textContent);
      setText(textContent);
    }
  }
  
  return (
    <div className='container-fluid'>
<ul className="m-5  nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{'--bs-nav-link-color': 'var(--bs-white)','--bs-nav-pills-link-active-color': 'var(--bs-primary)', '--bs-nav-pills-link-active-bg': 'var(--bs-red)'}}>
  <li className="nav-item" role="presentation">
    
    <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
  </li>
</ul>
    <div className='shapes m-5'> 
    <div className='shape1'>JGTECH</div>
    <div className='shape2'>WEB</div>
    </div>
    <div className='btn btn-outline-warning'>
      <h5>{time.toLocaleTimeString()}</h5>
      <h5>{out}</h5>
      
    
      {
        days>0?(<div><p>Assignment Available. {" "+days+" "} days remaining</p>
        <button onClick={()=>{setdays(0)}} className='btn btn-dark rounded-circle'>Submit</button></div>)
        :(<div><p>The system closed</p>
        <button className='btn btn-dark rounded-circle'>Submitted</button><button onClick={()=>{setdays(60)}} className=' btn btn-lg.btn-link '>Retry</button>
        </div>
        )
      }
</div>
      <div className='description'>
        <button onClick={()=>setopen(true)} className='btn btn-secondary m-5'>Contacts</button>
{
  open?<div>
    <p>0740550484</p>
    <p>jgkihiu@gmail.com</p>
  </div>:""
}

      </div>
      <div className='products m-5'>
      <button onClick={()=>setproduct(true)} className='btn btn-danger'>Products</button>
{
  product?<div>
    <p>Phones</p>
    <p>Watches</p>
  </div>:""
}
      </div>

      <div onClick={handleClick} className='btn-group btn-group-toggle m-3'>
      <button className='btn btn-outline-dark'>Click me 1</button>
      <button className='btn btn-outline-dark'>Click me 2</button>
      <button className='btn btn-outline-dark'>Click me 3</button>
      <button className='btn btn-outline-dark'>Click me 4</button>
      
    </div>
    <p>{text}</p>
    
    
    <div className="dropdown m-5">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">Dropdown item</button></li>
    <li><button className="dropdown-item" type="button">Dropdown item</button></li>
    <li><button className="dropdown-item" type="button">Dropdown item</button></li>
  </ul>
</div>
<a href={pdf} download="file.pdf">Download pdf</a>
    </div>
  )
}

export default Test
