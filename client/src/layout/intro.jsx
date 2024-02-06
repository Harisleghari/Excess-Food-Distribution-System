import './intro.css';
import Button from '../components/button';
import pic from '../assets/Intropic.png' ;



const Intro = ()=>{
    return(
        <div className='Intro'>
            <div className='Intro-1'>
                <h1><b>Secure, Deliver, and Savor Delicious Food with Ease!</b></h1>
                <p className='Intro-para'>We bridge the gap between food industry surplus and those in need - Join our non-profit mission today!</p>
                <Button text={['Donate Now']}></Button>
            </div>
            <>
                <img className='Intro-pic' src={pic} alt="Intro Pic"></img>
            </>
        </div>
    );
}

export default Intro;