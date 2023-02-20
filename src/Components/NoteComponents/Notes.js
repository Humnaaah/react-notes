import {useState, useEffect} from 'react';
import { v4 as uuid } from "uuid";
import '../assets/css/note.css';
import CreateNote from './CreateNote';
import Note from './Note';

const Notes = ({query}) =>{
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");

    // get text and store in state
    const textHandler = (e) => {
        setInputText(e.target.value);
    };
    // add new note to the state array
    const saveHandler = () => {
        const date = new Date();
        setNotes((prevState) => [
        ...prevState,
        {
            id: uuid(),
            text: inputText,
            date:date.toLocaleDateString(),
            time: date.toLocaleTimeString(),
        },
        ]);
        //clear the textarea
        setInputText("");
    };
    //delete note function
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };
    //saving data to local storage
    useEffect(()=>{
        const d = new Date();
        console.log("getting time for the note",d.toLocaleTimeString() )
        localStorage.setItem("Notes", JSON.stringify(notes));
    },[notes]);

    //get the saved notes and add them to the array
    useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
        setNotes(data);
    }
  }, []);

    return(
        <div className='notes'>
            {notes.filter((note) => note.text.toLowerCase().includes(query)).map((note) =>(
                <Note key={note.id} id={note.id} text={note.text} date={note.date} time={note.time} deleteNote={deleteNote}/>
            ))}
            <CreateNote 
            textHandler={textHandler}
            saveHandler={saveHandler}
            inputText={inputText}    
            />
        </div>
    )
}

export default Notes;