import "./accepterPage.css";
import Img from '../assets/accepterPage.png'
import Button from "../components/button";



const Accepter = ()=>{
    return (
      <>
        <div>
            <img className="Accepet-1" src={Img} alt="BackgroudImage" />
        </div>
        <div className="Accepet-2">
          <h1>
            <b>Accepter</b>
          </h1>
          <h3>Help us Rescue Food and Feed People in Need</h3>
          <p>
            As an Accepter with Rizq Bachao, you play a vital role in our
            mission to reduce food waste and feed people in need. By accepting
            food donations from our generous donors, you are helping us rescue
            perfectly good food that would otherwise go to waste and
            redistributing it to those who need it most. Whether you are an
            individual, a community organization, or a charitable institution,
            we welcome your support in helping us achieve our goal of ending
            hunger and food waste in Pakistan.
          </p>
          <Button text={['Find Food','accept']} />
        </div>
      </>
    );
}

export default Accepter;