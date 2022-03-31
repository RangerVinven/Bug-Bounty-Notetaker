import React from 'react';

interface Props {
    subdomain: string,
}

const Subdomain = (props: Props) => {
    return (
        <div className="ml-1 mt-3 p-2 rounded-md border-gray-400 border-solid border-2 flex w-fit">
            <div>
                <h3>{props.subdomain}</h3>
            </div>

            <div className="ml-10 font-normal">
                <h3>Subdirectories</h3>
            </div>

            <div className="ml-10 font-normal">
                <h3>Ports</h3>
            </div>
            
            <div className="ml-10 font-normal">
                <h3>Notes</h3>
            </div>
        </div>
    );
}
export default Subdomain;