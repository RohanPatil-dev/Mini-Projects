import React, { useState } from "react";

export default function BMI() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [BMI, setBMI] = useState(0);

  function calculate() {
    const heighmeter = height / 100;

    const bmi = weight / (heighmeter * heighmeter);

    return setBMI(bmi);
  }

  return (
    <>
      <div
        className="container text-center"
        style={{ marginTop: "200px", border: "2px double black",borderRadius : "20px" }}
      >
        <div className="p-3">
          <h1>BMI Calculator</h1>

          <label htmlFor="height">Height : {height}</label>
          <input
            type="range"
            name=""
            id="height"
            max={300}
            onChange={(event) => setHeight(event.target.value)}
          />

          <label htmlFor="weight">Weight : {weight}</label>
          <input
            type="range"
            name=""
            id="weight"
            max={300}
            onChange={(event) => setWeight(event.target.value)}
          />

          <br />

          <button
            className="bg-primary text-light mt-4 border p-2"
            onClick={() => {
              calculate();
            }}
          >
            Calculate
          </button>

          <br />

          <p>BMI is : {BMI}</p>
        </div>
      </div>
    </>
  );
}
