import './testimonial.css';
import T1 from '../assets/testimonial-1.png';
import T2 from '../assets/testimonial-2.png';

const Testimonial = ()=>{
    return(
        <div className='test'>
            <p className='test-p'><b>TESTIMONIALS</b></p>
            <h1 className='test-h'><b>What Our Users Are Saying…</b></h1>
            <div>
                <img className='test-pic' src={T1} alt="Testimonial-1"></img>
                <img className='test-pic' src={T2} alt="Testimonial-1"></img>
            </div>
        </div>
    )
}

export default Testimonial;