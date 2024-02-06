import './rewards.css';
import Button from '../components/button'
import reward from '../assets/reward.png'


const Rewards = ()=>{
    return(
        <>  
            <div className='reward-t'><h1><b>Share your food, earn rewards</b></h1></div>
            <div className='reward-1'>
                <div className='reward-1-1'>
                    <p>Join our rewards program to earn points for every pound of food you share through our platform. Redeem your points for exclusive discounts and coupons at local businesses in your community. By sharing your surplus food, you're not only helping those in need, but you're also contributing to a more sustainable and equitable food system in your neighborhood. Sign up today to start earning rewards and making a positive impact in your local community.</p>
                        <Button text={['Get Rewards']} />
                </div>
                <div >
                    <img className='reward-1-2' src={reward} alt="img" ></img>
                </div>
            </div>
        </>
    )
}

export default Rewards;
