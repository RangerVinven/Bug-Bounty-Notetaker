import React from 'react';
import ShortSearch from "./ShortSearch";
import { FcPlus } from "react-icons/fc";

const Sidebar = () => {
    return(
        <div className="bg-purple-500 w-48 min-h-screen">
            <div className="flex mb-2">
                <ShortSearch></ShortSearch>
            </div>

            <ul className="ml-1">
                <li className="mb-2">Department of Defense</li>
                <li className="mb-2">Redbull</li>
                <li className="mb-2">Facebook</li>
                <li className="mb-2">Amazon</li>
                <li className="mb-2">Apple</li>
                <li className="mb-2">Netflix</li>
                <li className="mb-2">Google</li>
            </ul>

            <FcPlus size={30} className="ml-1"></FcPlus>

        </div>
    );
}
export default Sidebar;