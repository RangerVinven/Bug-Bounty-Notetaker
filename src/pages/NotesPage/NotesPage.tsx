import React from "react";
import Title from "../../components/General/Title";
import Notes from "../../components/Notes/Notes";

interface Props {
    subdomain: string,
    subdirectory: string
}

const NotesPage = (props: Props) => {
    return (
        <div className="ml-2 w-full">
            
            <div className="w-fit">
                <Title title={props.subdomain.concat(props.subdirectory).concat(" - Notes")} />
                <hr />
            </div>

            <div className="mt-3">
                <Notes subdomain={props.subdomain} subdirectory={props.subdirectory}/>
            </div>
        </div>
    );
}

export default NotesPage;