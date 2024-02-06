import "./sidebar.css";
import { FaHome } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { LuBadge } from "react-icons/lu";

const SideBar = () => {
  return (
    <>
      <div className="side-b">
        <div className="side-2">
          <FaHome />
          <a className="side-h" href="/dashboard/:">
            Profile
          </a>
        </div>
        <div className="side-3" />
        <div className="side-2">
          <ImStatsBars />
          <a className="side-h" href="/dashboard/:stats">
            Stats
          </a>
        </div>
        <div className="side-3" />
        <div className="side-2">
          <LuBadge />
          <a className="side-h" href="/dashboard/:badges">
            Badges
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
