import React from "react";

interface Props {
    subdirectory: string
}

const Subdirectory = (props: Props) => {
    return (
        <div className="ml-1 mt-3 p-2 rounded-md border-gray-400 border-solid border-2 flex w-fit">
            <div className="font-bold">
                <h3>{props.subdirectory}</h3>
            </div>
            
            <div className="ml-5 font-normal">
                <h3>Notes</h3>
            </div>
        </div>
    );
}
export default Subdirectory;