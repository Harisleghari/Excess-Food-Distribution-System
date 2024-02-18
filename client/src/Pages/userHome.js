
import AcceptedActivity from '../layout/acceptedActivity';
import DonatedActivity from '../layout/donatedActivity';
import VolunteeredActivity from '../layout/volunteeredActivity';

function UserHome() {

  return (
    <div>
      <div>
        <DonatedActivity />
        <AcceptedActivity />
        <VolunteeredActivity />
      </div>
    </div>
  );
}

export default UserHome;
