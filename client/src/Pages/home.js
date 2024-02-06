import './home.css';
import Intro from '../layout/intro';
import Help from '../layout/help';
import Working from '../layout/working';
import Doner from '../layout/doner';
import Rewards from '../layout/rewards';
import Testimonial from '../layout/testimonial';
import Stats from '../layout/stats';
import Volunteer from '../layout/volunteer';
import Chatbot from '../components/chatBot';

const Home = () => {
  return (
    <>
      <Intro />
      <Doner />
      <Help />
      <Working />
      <Rewards />
      <Volunteer />
      <Stats />
      <Testimonial />
      <Chatbot/>
    </>
  );
};

export default Home;
