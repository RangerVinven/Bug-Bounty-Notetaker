import React from "react";
import Title from "../../components/General/Title";

interface Props {
    subdomain: string,
    subdirectory: string
}

const NotesPage = (props: Props) => {
    return (
        <div className="ml-2">
            <Title title={props.subdomain.concat(props.subdirectory).concat(" - Notes")}></Title>
            <hr />
        </div>
    );
}

export default NotesPage;