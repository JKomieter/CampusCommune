import { NoteType } from "@/types";
import NoteItem from "./NoteItem";


const DisplayNotes = ({
    notes
}: {
    notes: NoteType[];
}) => {
    return (
        notes.map(note => (
            <NoteItem
                key={note.media_path}
                note={note}
            />
        ))
    )
};


export default DisplayNotes;