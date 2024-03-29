import { Card } from "@nextui-org/react";

function Sidebar() {
    return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
        <div className="flex items-center justify-center w-14 h-14  p-0 xl:ml-24">
        <span className="hidden xl:inline">
            <form className="flex p-4" >
                <input placeholder="search anything" className="bg-[#35353f] p-1 text-white flex rounded" />
            </form>
            </span>
        </div>
        
        
    </div>   
     );
}
export default Sidebar;