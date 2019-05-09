import React from 'react';
// import NoteItem from '../noteitem';

const NoteList = ({ notes }) => (
    <div>
      <ul>
        {
          notes.map((note, index) => (
              <li key={`note-${index}`}>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
              </li>
          ))
        }
      </ul>
    </div>
);

export default NoteList;
