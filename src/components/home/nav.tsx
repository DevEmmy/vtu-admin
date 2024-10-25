

import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";

interface Prop{
    siteAdmin: Boolean,
    dashboard: Boolean
    settings: Boolean
}

const nav: React.FC<Prop> = ({ siteAdmin, dashboard, settings }) =>  {
    const nav = [
        {
            img: <LuLayoutDashboard />,
            title: "Dashboard",
            link: '/',
            color: dashboard? 'text-sky-400' : 'text-gray-400'
        },
        {
            img: <CiGlobe />,
            title: "Site Admin",
            link: '/site-admin',
            color: siteAdmin ? 'text-sky-400' : 'text-gray-400'

        },
        {
            img: <IoSettingsOutline />,
            title: "Settings",
            link: '/settings',
            color: settings ? 'text-sky-400' : 'text-gray-400'
        }
      ];
  return (
    <div className='py-6 px-4 flex justify-between bg-white  w-full fixed bottom-0 z-20'>

        {nav.map((item, index)=>(
            <Link to={item.link} key={index} className={`w-20 text-2xl ${item.color} flex flex-col items-center`}>
                {item.img}
                <p className='text-xs'>{item.title}</p>
            </Link>
        ))}
      
    </div>
  )
}

export default nav
