import React from 'react';
import NoteCreateForm from "../NoteCreateForm/NoteCreateForm";
import Modal from '../Modal/Modal';


export default class NoteItem extends React.Component {

render() {
  const { handleUpdateNote } = this.props;
  const currentNote = this.props.note;
  // -------------------------------------------------------------------------------
  // HELPER FUNCTIONS
  // -------------------------------------------------------------------------------
  const showModal = () => handleUpdateNote({...currentNote, editing: true});
  //  - this function will close the modal

  const hideModal = ()=> handleUpdateNote({...currentNote, editing: false});

  // -------------------------------------------------------------------------------

  const currentNotes = this.props.note;
  return(
      <li key={currentNotes.id}>
        {currentNotes.title} : {currentNotes.content}

        <button onClick={this.props.handleRemoveNote.bind(null, this.props.notes)}>Remove</button>
        <button onClick={showModal}>Edit</button>
        <Modal show={currentNotes.editing} hideModal={hideModal}>
          <NoteCreateForm/>
        </Modal>
      </li>
  );
}

}

//////
// export default class NoteItem extends React.Component {
//   render() {
//     const currentNotes = this.props.note;
//     return(
//         <li key={currentNotes.id}>
//           {currentNotes.title} : {currentNotes.content}
//           <button onClick={this.props.handleRemoveNote.bind(null, this.props.notes)}>Remove</button>
//           {/*<NoteCreateForm/>*/}
//         </li>
//     )
//   }
// }
