import './volunteer.css';
import Img from '../assets/volunteerPage.png';
import Volunteer from '../layout/volunteer';
import Stats from '../layout/stats';

const VolunteerPage = ()=>{
    return (
      <>
        <div>
          <img className="vol-img-1" src={Img} alt="BackgroundImage" />
        </div>
        <div className="vop-1">
          <h1>
            <b>Volunteers</b>
          </h1>
          <div className="vop-p">
            <p>
              At Rizq Bachao, we strive to connect people in need with free,
              nutritious food in their local communities. We rely on volunteers
              like you to help us maintain an up-to-date database of food
              assistance sites across Pakistan.
            </p>
            <p>
              You can help us by:
              <ol type="1">
                <li>
                  Keeping our database up to date by calling food distribution
                  points and asking a series of questions about their hours and
                  operations in light of any changes that may have occurred.
                </li>
                <li>
                  Conducting internet research for new food assistance sites and
                  updating our database with the new information.
                </li>
                <li>
                  Updating and maintaining food assistance sites within the
                  database on a periodic basis.
                </li>
              </ol>
            </p>
            <p>
              <b>IN-PERSON OPPORTUNITIES:</b>
              <br />
              If you're willing and able to help out in person, there are plenty
              of opportunities to do so! You can volunteer at food banks and
              pantries to hand out or pack food, use your personal vehicle to
              deliver food to those who don’t have access to food banks and
              pantries, or support and maintain local community gardens (where
              applicable).
            </p>
          </div>
        </div>
        <Volunteer />
        <Stats />
        <br />
        <br />
      </>
    );
}

export default VolunteerPage;