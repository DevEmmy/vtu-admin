import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Notifications = () => {
    return (
        <div className="relative px-3 py-5 flex flex-col gap-7 min-h-screen">
        <div>
          <Link to={"/"} className="text-xl">
            <FaArrowLeftLong />
          </Link>
          <h1 className="text-xl font-bold">Notifications</h1>
        </div>
        </div>
    )
};
export default Notifications;