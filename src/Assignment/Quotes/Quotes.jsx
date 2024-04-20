import React, { useState, useEffect } from "react";

export default function Quotes() {
  const [value, setValue] = useState([]);
  const [quote, setQuote] = useState([])

  function API() {
    fetch("https://type.fit/api/quotes")
      .then((data) => {
           return data.json()
      })
      .then((data) => {
        console.log(data);
        setValue(data)
      }).catch(err =>{
        console.log(err);
      })
  }

  function getNewQuote(){
    const newQuote = value[Math.floor(Math.random() * value.length)]

     return setQuote(newQuote)
  }

  useEffect(() => {
    API();
  }, []);

  console.log(quote);

  return (
    <>
      <div className="bg-warning p-5">
        <div
          className="container bg-light p-5"
          style={{ borderRadius: "10px" }}
        >
          <button
            className="bg-primary text-light border border-round p-2"
            style={{ borderRadius: "10px" }}
            onClick={()=>{getNewQuote()}}
          >
            Get New Quotes
          </button>

          <p className="mt-3">
           {quote.text}
          </p>

          <p>{quote.author}</p>
        </div>
      </div>
    </>
  );
}
