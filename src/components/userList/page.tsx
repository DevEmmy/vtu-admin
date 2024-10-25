import Nav from "../home/nav";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { UserCard } from "./userCard";

const userList = () => {
    const userList = [
        { id: 1, name: 'Aisha Malik', phone: '0800123456', status: 'Active' },
        { id: 2, name: 'John Smith', phone: '0800987654', status: 'Inactive' },
        { id: 3, name: 'Emma Johnson', phone: '0800567890', status: 'Active' },
        { id: 4, name: 'David Lee', phone: '0800345678', status: 'Active' },
        { id: 5, name: 'Sophia Brown', phone: '0800234567', status: 'Inactive' },
        { id: 6, name: 'Michael Wang', phone: '0800567890', status: 'Active' },
      ];

  return (
    <section className="w-full h-full font-sans p-4 flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-3">
        <Link to={"/site-admin"} className="text-xl">
          <FaArrowLeftLong />
        </Link>
        <h1 className="font-bold text-2xl">User List</h1>
      </div>
      <div className="p-4">
      {userList.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          phone={user.phone}
          status={user.status}
        />
      ))}
      </div>
    <Nav dashboard={false} siteAdmin={true} settings={false}/>
    </section>
  );
};
export default userList;
