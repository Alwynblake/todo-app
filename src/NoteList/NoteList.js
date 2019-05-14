import React from 'react';
import NoteItem from '../NoteItem/NoteItem';

const NoteList = ({ notes, handleRemoveNote }) => (
    <div>

      <ul>
        {
          notes.map((note) => (
              <li key={note.id}>
                <h1>___________</h1>
                {/*<h2>{note.title}</h2>*/}
                {/*<p>{note.content}</p>*/}
                <NoteItem note={note}
                handleRemoveNote={handleRemoveNote}/>
              </li>
          ))
        }
      </ul>
    </div>
);

export default NoteList;



