import './help.css';
import Button from '../components/button';


const Help = ()=>{
    return(
        <div className='back'>
            <div className='help'>
                <div className='help-1'>
                    <h1><b>
                        Helping Hands Non-Profit
                    </b></h1>
                    <h3 className='help-h'><b>
                        Connecting Communities through Food
                    </b></h3>
                    <p className='help-p'>
                        We believe that everyone deserves access to fresh, healthy food. That's why we've created a platform that connects individuals and businesses with excess food to those who need it most. Our mission is to reduce food waste while addressing food insecurity in our communities.
                    </p>
                    <Button text={["Join as Volunteer"]}   />
                </div>
            </div>
        </div>
    )
}

export default Help;