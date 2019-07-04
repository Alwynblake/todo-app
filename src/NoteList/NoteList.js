import React from 'react';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.scss';

const NoteList = ({ notes, handleRemoveNote, handleUpdateNote
                  }) => (
    <div>

      <ul>
        {
          notes.map((note) => (
              <li key={note.id}>
                <h1>-</h1>
                {/*<h2>{note.title}</h2>*/}
                {/*<p>{note.content}</p>*/}
                <NoteItem note={note}
                handleRemoveNote={handleRemoveNote}
                handleUpdateNote={handleUpdateNote}/>
              </li>
          ))
        }
      </ul>
    </div>
);

export default NoteList;



