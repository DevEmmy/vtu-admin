import Nav from "../nav";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IconType } from "react-icons";
import { FaAngleRight, FaArrowLeftLong } from "react-icons/fa6";
import { TbTransfer } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { useEffect } from "react";
import { useUser } from "@/hooks/Auth";

interface NavItem {
  title: string;
  link: string;
  icon: IconType;
}

const SiteAdmin = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { title: "Admin Bank account", link: "/bank-account", icon: RiAdminLine },
    { title: "Transactions", link: "/transactions", icon: TbTransfer },
  ];

  const AccNavItems: NavItem[] = [
    { title: "User list", link: "/user-list", icon: CiUser },
  ];

  useEffect(() => {
    if(!user) {
      navigate("/sign-in")
    };
  }, [user, navigate]);

  return (
    <div className="w-full h-full font-sans p-4 flex flex-col gap-y-6">
      <div className="flex flex-col text-gray-700 gap-y-4">
        <Link to={"/"} className="text-xl">
          <FaArrowLeftLong />
        </Link>
        <h1 className="font-bold text-lg">Site Admin</h1>
      </div>
      <div>
        <div className=" flex flex-col justify-evenly items-start w-full gap-3 mt-2">
          <sub className="text-[#64748B]">VTU App</sub>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="py-1 w-5/6 text-gray-700 rounded-lg transition-colors"
            >
              <Link
                to={item.link}
                className="w-full py-1 flex items-center gap-2 justify-between"
              >
                <div className="flex gap-1">
                  <item.icon className="w-5 h-5" />
                  <span className="">{item.title}</span>
                </div>
                <FaAngleRight />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-evenly items-start w-full gap-3"></div>
        <sub className="text-[#64748B]">User Management</sub>
        {AccNavItems.map((item, index) => (
          <div
            key={index}
            className="py-1 w-5/6 text-gray-700 rounded-lg transition-colors"
          >
            <Link
              to={item.link}
              className="w-full  py-2 flex items-center gap-2 justify-between"
            >
              <div className="flex gap-1">
                <item.icon className="w-6 h-6" />
                <span>{item.title}</span>
              </div>
              <FaAngleRight className="font-thin" />
            </Link>
          </div>
        ))}
      </div>
      <Nav dashboard={false} siteAdmin={true} settings={false} />
    </div>
  );
};
export default SiteAdmin;
