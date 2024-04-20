import React from "react"

import { API } from "./API"

export default function Corousel() {
  return (
    <>
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
<div className="carousel-inner" >
{API.map((value,index)=>{
     return(
      <>
    <div className={`carousel-item ${value.id === 1 ? "active" : ""}`} key={value.id} >
      <img className="d-block w-100" src={value.image} alt="First slide" style={{height : "400px"}} />
    </div>
      </>
     )
})}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  

    </>
  )
}