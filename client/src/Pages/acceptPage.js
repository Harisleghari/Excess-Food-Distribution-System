import './acceptPage.css';
import { useState } from "react";


const Accept = ()=>{

    const [value, setValue] = useState("");

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
      <>
        <div className="a-1">
          <div className="a-1-1">
            <h1>
              <b>Find Food</b>
            </h1>
            <p>
              Looking for assistance in finding food? Rizq Bachao can help. We
              work with a variety of food donors and volunteers to connect those
              in need with fresh, nutritious meals.
              <br />
              Don't let hunger get in the way of living a healthy, active
              lifestyle. Get started with Rizq Bachao today and find the food
              you need.
            </p>
          </div>
          <div className="a-1-2">
            <button className="a-1-2-btn-1">
              <b>Find Food</b>
            </button>
            <button className="a-1-2-btn-2">
              <b>Volunteer</b>
            </button>
          </div>
          <div className="a-1-3">
            <h3>Search Options</h3>
            <h3>Need Help Finding the food</h3>
            <div className="a-1-3-1">
              <input
                type="number"
                placeholder=""
                value={value}
                onChange={handleChange}
              />
              <p>Miles</p>
            </div>
            <div className="a-1-3-2">
              <button className="a-1-3-btn-1">
                <b>Seacrh</b>
              </button>
              <button className="a-1-3-btn-2">
                <b>Reset</b>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Accept;