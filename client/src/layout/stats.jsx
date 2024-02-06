import './stats.css'
import stat1 from '../assets/stat-1.png';
import stat2 from '../assets/stat-2.png';
import stat3 from '../assets/stat-3.png';

const Stats= ()=>{
    return(
        <div className='stat'>
            <p className='stat-h'><b>excess food distributing system to Say, After Providing The Best Non-Profit Support.</b></p>
            <div className='stat-1'>
                <div className='card-s'>
                    <img src={stat1} alt='icon'></img>
                    <p className='p-s'>
                        Total Volunteer
                    </p>
                    <p className='pn-s'>
                        459028
                    </p>
                </div>
                <div className='card-s'>
                    <img src={stat2} alt='icon'></img>
                    <p className='p-s'>
                        Total Rewards
                    </p>
                    <p className='pn-s'>
                        2930
                    </p>
                </div>
                <div className='card-s'>
                    <img src={stat3} alt='icon'></img>
                    <p className='p-s'>
                        Successfull Projects
                    </p>
                    <p className='pn-s'>
                        450
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Stats;