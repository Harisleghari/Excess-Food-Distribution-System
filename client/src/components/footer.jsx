import './footer.css';
import Logo from '../assets/footerLogo.jpg';
import { BsFacebook} from "react-icons/bs";
import {AiOutlineInstagram ,AiFillTwitterCircle} from "react-icons/ai";

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className='footer-1'>
                <div className='footer-1-1'>
                    <img src={Logo} width="200" height="65" alt="EFDS" ></img>
                    <p className='para'>"<b>excess food distributing system</b> is a non-profit organization dedicated to reducing food waste and fighting hunger in our community. By connecting those with surplus food to those in need, we're making a difference in the lives of countless individuals. Join us in our mission to create a world where everyone has access to nutritious food. Contact us to learn more."</p>
                </div>
                <div className='footer-1-2'>
                    <h5 className='para'>Get Social with us</h5>
                    <div className='footer-1-2-1'>
                        <BsFacebook className='icons'></BsFacebook>
                        <AiOutlineInstagram className='icons'></AiOutlineInstagram>
                        <AiFillTwitterCircle className='icons'></AiFillTwitterCircle>
                    </div>
                </div>
            </div>
            <div className='footer-2'>
            </div>
            <p className='para'>Copyright © 2023, excess food distributing system. All rights reserved.</p>
        </div>
    )
};

export default Footer;