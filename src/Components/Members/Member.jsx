import React,{useState} from 'react'
import "./Member.css"
const memberList=[ 
  {id:1,name:"hussian", service:"web developer", img:"https://picsum.photos/130/130?image=1027",year:"2020"},
  {id:2,name:"hussian", service:"web developer",img:"https://picsum.photos/130/130?image=1027",year:"2020"},
  {id:3,name:"hussian", service:"web developer",img:"https://picsum.photos/130/130?image=1027",year:"2020"},
  {id:4,name:"hussian", service:"web developer",img:"https://picsum.photos/130/130?image=1027",year:"2020"},
  {id:5,name:"hussian", service:"web developer", img:"https://picsum.photos/130/130?image=1027",year:"2020"},
  {id:6,name:"hussian", service:"web developer",img:"https://picsum.photos/130/130?image=1027",year:"2020"},
  {id:7,name:"hussian", service:"web developer",img:"https://picsum.photos/130/130?image=1027",year:"2020"},
  {id:8,name:"hussian", service:"web developer",img:"https://picsum.photos/130/130?image=1027",year:"2020"},
  {id:9,name:"huss", service:"web developer",img:"https://picsum.photos/130/130?image=1028",year:"2021"},
  {id:10,name:"huss", service:"web developer",img:"https://picsum.photos/130/130?image=1028",year:"2021"},
  {id:11,name:"huss", service:"web developer",img:"https://picsum.photos/130/130?image=1028",year:"2021"},
  {id:12,name:"huss", service:"web developer",img:"https://picsum.photos/130/130?image=1028",year:"2021"},
  {id:13,name:"huss", service:"web developer",img:"https://picsum.photos/130/130?image=1028",year:"2021"},
  {id:14,name:"huss", service:"web developer",img:"https://picsum.photos/130/130?image=1028",year:"2021"},
  {id:15,name:"huss", service:"web developer",img:"https://picsum.photos/130/130?image=1028",year:"2021"},
  {id:16,name:"huss", service:"web developer",img:"https://picsum.photos/130/130?image=1028",year:"2021"}





]
const Member = () => {
const [select,setSelect]=useState("2020")
const memberData=memberList.filter((cur)=>(cur.year==select))

  return (
    <div className='container my-4 '>
      <div className="d-flex justify-between px-4 row">
<h1 className='text-capitalize text-center text-md-start text-main col-12 col-md-6'>our team member </h1>
<div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center">
<select className='text-main text-capitalize text-center shadow' value={select} onChange={(e)=>(setSelect(e.target.value))}style={{border:"none",fontSize:"30px"}}>
 
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>

</select>
</div>
</div>
<hr />
<div className="container my-4">
  <div className="row">
    {
      memberData.map((cur)=>(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={cur.id}>
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src={cur.img}/>
        </div>
        <div className="team-content">
          <h3 className="name text-capitalize">{cur.name}</h3>
          <h4 className="title text-capitalize">{cur.service}</h4>
        </div>
        <ul className="social">

	      <li><i className="fa-solid fa-phone text-light mx-2"></i></li>  
        <small className='text-light'>+92 3122526345</small>
        </ul>
      </div>
    </div>
      ))
    }
    

   
  </div>
</div>
    </div>
  )
}

export default Member