import React from 'react';
import Image from 'next/image';
import { ImUsers } from 'react-icons/im';
import SidebarItem from '../components/SidebarItem'
import {MdGroups, MdOutlineOndemandVideo, MdOutlineExpandMore} from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import {BsStopwatch} from 'react-icons/bs'
import {useSession, signOut} from 'next-auth/react';
import {FiLogOut} from 'react-icons/fi';



const Sidebar = () => {
    const {data: session} = useSession();

    return (
        <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
            <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
            <Image className="rounded-full cursor-pointer" src={session?.user.image}
                    width={40} height={40}/>
            <p className="hidden sm:inline-flex font-medium">{session?.user.name}</p>
            </div>
            <SidebarItem Icon={ImUsers} value="Friends"/>
            <SidebarItem Icon={MdGroups} value="Groups"/>
            <SidebarItem Icon={AiOutlineShop} value="Marketplace"/>
            <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch"/>
            <SidebarItem Icon={BsStopwatch} value="Memories"/>
            <SidebarItem Icon={MdOutlineExpandMore} value="See More"/>
  
            <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
                <FiLogOut onClick={signOut} className="h-8 w-8 text-blue-500"/>
                <p className="hidden sm:inline-flex font-medium">Logout</p>
        </div>
        </div>
    )
}

export default Sidebar
