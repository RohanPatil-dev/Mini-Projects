import React, { useState } from "react";
import { User } from "./API";

export default function Users() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  function getResult() {
    const result = User.find((data) => {
      return data.email === value || data.username === value;
    });

    if (!result) {
      setData("Data Not Found !");
    } else {
      setData(result);
    }
    console.log(result);
  }

  return (
    <>
      <div className="p-3" style={{border : "2px solid black",width : "400px", margin : "auto",marginTop : "100px"}}>
      <input
        type="text"
        placeholder="Enter username or Email...."
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        style={{marginLeft : "60px",marginTop : "20px"}}
      />
      <button
        className="bg-primary text-bold text-light border"
        onClick={() => {
          getResult();
        }}
      >
        Click
      </button>

      <div className="mt-4" style={{marginLeft : "70px",fontSize : "20px",fontWeight : "600",fontStyle : "italic"}}>
        {data === "Data Not Found !" ? (
          <>
            <p>{data}</p>
          </>
        ) : (
          <>
            <p>id : {data.id}</p>
            <p>username : {data.username}</p>
            <p>email : {data.email}</p>
          </>
        )}
      </div>
      </div>
    </>
  );
}
