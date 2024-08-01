import { useState } from 'react'
import './App.css'

import Header from './assets/Components/Header';
import CreateTaskArea from './assets/Components/CreateTaskArea';
import TaskArea from './assets/Components/TaskArea';

function App() {
  const [noteArray, setNoteArray] = useState([]);

    function addNote(note) {
        setNoteArray((prevNote) => {
            return [...prevNote, note];
        })
    }

    function deleteNote(noteId) {
      setNoteArray((prevNote) => {
        return prevNote.filter((noteObject, index) => {
          return index != noteId;
        });
      });
    }
  

  return (
    <>
      <Header />
      <CreateTaskArea onAdd={addNote}/>
      <div style={{display: "flex", flexWrap: "wrap", gap: "1%", padding: "0 2.5%", marginTop: "1rem"}}>
        {noteArray.map((noteObject, index) => {
          return (
            <TaskArea 
              key={index}
              id={index}
              title={noteObject.title}
              content={noteObject.content}
              onDelete={deleteNote}
            />
          );
        })}
        
      </div>
    </>
  );
}

export default App
