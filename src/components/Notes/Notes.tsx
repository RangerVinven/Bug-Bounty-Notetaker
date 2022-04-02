import { useState } from "react";
import RichTextEditor from "react-rte";

interface Props {
    subdomain: string,
    subdirectory: string
}

const Notes = (props: Props) => {

    const [note, setNote] = useState(RichTextEditor.createEmptyValue());

    return(
        <RichTextEditor value={note} onChange={setNote} className="w-11/12" />
    );
}
export default Notes;