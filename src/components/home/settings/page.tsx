
import Nav from '../nav';
import { useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { RiUserSettingsLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { LiaHeadsetSolid } from "react-icons/lia";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useLogout, useUser } from '@/hooks/Auth';
import { useNavigate } from 'react-router-dom';

function settings() {
    const { logout } = useLogout();
    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
          navigate("/sign-in");
        }
      },[user, navigate]);
    
      if(!user){
        return null;
      }
    

    const settings = [
        {
            icon: <RiUserSettingsLine />,
            title: 'Account Settings',
            link: '/account-settings'
        },
        {
            icon: <FaRegBell />,
            title: 'Notification Settings',
            link: '/notification-settings'
        },
        {
            icon: <MdOutlinePrivacyTip />,
            title: 'Privacy Settings',
            link: '/privacy-settings'
        },
        {
            icon: <LiaHeadsetSolid />,
            title: 'Help & Support',
            link: '/help-and-support'
        },
    ]
  return (
    <div>

        <div className='relative px-3 py-5 flex flex-col gap-7 min-h-screen'>
        <Link to={"/"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>

        <h1 className='text-xl font-bold'>Settings</h1>

        <div className='flex flex-col gap-4'>
            {settings.map((item, index) =>(
                <Link key={index} className='flex items-center py-2' to={item.link}>
                    <div className='text-xl'>
                        {item.icon}
                    </div>
                    
                    <h2 className='ml-2'>{item.title}</h2>
                    <RiArrowDropRightLine  className='ml-auto text-3xl text-gray-500'/>
                </Link>
            ))}
        </div>

        <div onClick={logout} className='flex justify-center text-sky-400 cursor-pointer text-sm font-bold'>
            <p>Log out</p>
        </div>

        </div>
      <Nav dashboard={false} siteAdmin={false} settings={true}/>
    </div>
  )
}

export default settings
