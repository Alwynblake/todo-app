import React from 'react';
import NoteCreateForm from "../NoteCreateForm/NoteCreateForm";
import uuidv1 from "uuid/v1";
// import Dashboard from '.../dashboard/dashboard';
//
// import NoteList from "../NoteList/NoteList";

// const currentNotes = this.props;
// const NoteItem = () => (
//     <div>
//       <button onClick={this.props.handleRemoveNote.bind(null, this.props.notes)}>Remove</button>
//     </div>
// );

/////***********
export default class NoteItem extends React.Component {
  render() {
    const currentNotes = this.props.note;
    console.log(currentNotes, 'currentNotes');
    return(
        <li key={currentNotes.id}>
          {currentNotes.title} : {currentNotes.content}
          <button onClick={this.props.handleRemoveNote.bind(null, this.props.notes)}>Remove</button>
          <NoteCreateForm/>
        </li>
    )
  }
}
