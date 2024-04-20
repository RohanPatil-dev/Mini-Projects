import React, { useState } from "react";

import { PlayList } from "./API";

export default function Play() {
  const [video, setVideo] = useState(0);

  console.log(video);

  function nextVideo() {
    return setVideo(video + 1);
  }

  function previousVideo() {
    return setVideo(video - 1);
  }

  return (
    <>
      <div className="container">
        {PlayList.map((data, index) => {
          if (index === video) {
            return (
              <>
                <div className="d-flex" style={{ justifyContent: "center" }}>
                  <video controls autoPlay style={{ height: "400px", width: "700px",borderRadius : "20px" }}>
                    <source src={PlayList[video].videos} type="video/mp4" />
                  </video>
                </div>
              </>
            );
          } 
        })}

       <div className="mt-5" style={{display : "flex",gap : "20px 20px",marginLeft : "450px"}}>
       <button className="bg-primary text-light p-2"
          onClick={() => {
            nextVideo();
          }}
        >
          Next
        </button>
        <button className="bg-primary text-light"
          onClick={() => {
            previousVideo();
          }}
        >
          Previous video
        </button>
       </div>
      </div>
    </>
  );
}
