import Nav from "../home/nav";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { UserCard } from "./userCard";
import { useUser } from "@/hooks/Auth";
import { useAllUsers } from "@/hooks/use-users";

const userList = () => {
  const { user } = useUser();
  const { users } = useAllUsers();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  if (!users || !Array.isArray(users)) {
    return <div>No transactions found</div>; 
}

  return (
    <>
    <section className="w-full h-full font-sans p-4 mb-10 flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-3">
        <Link to={"/site-admin"} className="text-xl">
          <FaArrowLeftLong />
        </Link>
        <h1 className="font-bold text-2xl">User List</h1>
      </div>
      <div className="p-4">
        {users.map((user: any) => (
          <UserCard
            key={user._id}
            id={user._id}
            firstname={user.firstName}
            lastname={user.lastName}
            email={user.email}
            status={user.status}
          />
        ))}
      </div>
    </section>
      <Nav dashboard={false} siteAdmin={true} settings={false} />
    </>
  );
};
export default userList;
