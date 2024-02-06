import './working.css'
import Card from 'react-bootstrap/Card';
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'


const Working = ()=>{
    return(
        <>
            <div className='work-h'>
                <h1><b>How it Works?</b></h1>
            </div>
            <div className='work'>
                <Card className='card'>
                    <Card.Img variant="top" src={work1} />
                    <Card.Body>
                        <Card.Title><b>Card Posting Your Surplus Food</b></Card.Title>
                        <Card.Text>
                        "Post your surplus food on our website with the type of food, quantity, and pickup location. Individuals in your nearby area who need food assistance can see your post and arrange a pickup time. By sharing your excess food, you can make a difference in someone's life and reduce food waste."
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card'>
                    <Card.Img variant="top" src={work2} />
                    <Card.Body>
                        <Card.Title><b>Connecting with People in Need</b></Card.Title>
                        <Card.Text>
                            “Individuals in your nearby area who are in need of food assistance can browse the available postings on our website and contact you to arrange a pickup time. By connecting with people in need, you can make a direct impact in your community and help reduce food insecurity.”

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card'>
                    <Card.Img variant="top" src={work3} />
                    <Card.Body>
                        <Card.Title><b>Arranging Food Pickup</b></Card.Title>
                        <Card.Text>
                            “Arrange a pickup time and location with the individual in need. Work together to find a convenient time. By arranging food pickup, you can ensure your excess food goes to someone who needs it and reduce waste in your community.” 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Working;