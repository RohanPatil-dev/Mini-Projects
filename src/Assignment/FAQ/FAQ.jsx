import React from "react"

import { Data } from "./API"

export default function FAQ() {
  return (
    <>
<div id="accordion">
  {
    Data.map((value,index) =>{
       return(
        <>
  <div class="card">
    <div class="card-header" id={`heading${value.id}`}>
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target={`#collapse${value.id}`} aria-expanded="true" aria-controls={`collapse${value.id}`}>
         {value.Q}
        </button>
      </h5>
    </div>

    <div id={`collapse${value.id}`} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
       {value.A} 
      </div>
    </div>
  </div>
        </>
       )
    })
  }
</div>
    </>
  )
}