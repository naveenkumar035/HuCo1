 import Image from "next/image";
import {HomeIcon} from "@heroicons/react/solid";
import SidebarLink from "../components/SidebarLink";
import { Link } from "@nextui-org/react";
import { signOut } from "next-auth/react";


function Sidebar() {

    return (<div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
        <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
            <Image src="/android-chrome-192x192.png" width={30} height={30} />
        </div>
        
        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        
        
        <Link  href="/">
         <SidebarLink className="text-black" text="Home"  Icon={HomeIcon} active/>
         </Link>   
         
         <Link onClick={signOut} >
         <SidebarLink className="text-black"  text="signOut" Icon={UserIcon}active  />
         </Link>
        
    
                
         
        </div>
    </div>    
    );
}
export default Sidebar;