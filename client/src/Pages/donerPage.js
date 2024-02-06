import './donerPage.css';
import donerStart from '../assets/doner-start.png';
import Img1 from '../assets/doner-pr-1.png';
import Img2 from "../assets/doner-pr-2.png";
import Img3 from '../assets/doner-pr-3.png'

import Button from '../components/button';

const DonerPage = ()=>{
    return (
      <div>
        <div>
          <img
            className="doner-1-1"
            src={donerStart}
            alt="Doner-Background"
          ></img>
        </div>
        <div className="doner-1-2">
          <h1>
            <b>Food Doners</b>
          </h1>
          <h4>IT'S EASY TO BE A FOOD DONOR</h4>
          <h3>
            <b>Help Feed People with Your Excess Food</b>
          </h3>
          <p>
            Are you a restaurant, grocery store, farm, cafeteria, or caterer
            with excess food that can be donated to those in need? By signing up
            for Rizq Bachao's food donation program, you can make a significant
            impact on your community, while also reducing food waste and
            receiving tax deductions.
          </p>
        </div>
        <div className="doner-1-3">
          <Button text={["Donate Now", "/donation"]} />
        </div>
        <div className="doner-1-4">
          <h3>
            <b>A Solvable Problem</b>
          </h3>
          <p>
            Many people in our communities are struggling with hunger and food
            insecurity, yet a significant amount of food goes to waste each day.
            This is a solvable problem, and excess food distributing system is
            dedicated to making a difference. Service organizations and
            charities want access to excess food, but there are barriers in the
            way - locating the excess food, establishing their credentials, and
            efficiently deploying resources to transport the food to those in
            need. That's where excess food distributing system comes in - we
            break down these barriers and make it easy for food donors to
            connect with legitimate charities and food banks to get excess food
            to those who need it the most. By working together, we can reduce
            food waste, help feed our communities, and build a more equitable
            and sustainable food system.
          </p>
        </div>
        <div className="doner-1-5">
          <img src={Img1} alt=""></img>
          <img src={Img2} alt=""></img>
          <img src={Img3} alt=""></img>
        </div>
      </div>
    );
}

export default DonerPage;