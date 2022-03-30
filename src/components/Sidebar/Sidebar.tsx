import React from 'react';
import Search from "./Search";
import { FcPlus } from "react-icons/fc";

const Sidebar = () => {
    return(
        <div className="bg-purple-500 w-48 min-h-screen">
            <div className="flex mb-2">
                <Search></Search>
                <FcPlus size={30} className="ml-2"></FcPlus>
            </div>

            <ul className="ml-1">
                <li>Department of Defense</li>
                <li>Redbull</li>
                <li>Facebook</li>
                <li>Amazon</li>
                <li>Apple</li>
                <li>Netflix</li>
                <li>Google</li>
            </ul>
        </div>
    );
}
export default Sidebar;