import React from 'react';
import NoteCreateForm from "../NoteCreateForm/NoteCreateForm";
import Modal from '../Modal/Modal';

export default class NoteItem extends React.Component {
  render() {
    const {handleUpdateNote} = this.props;
    const currentNotes = this.props.note;

    const showModal = () => handleUpdateNote({...currentNotes, editing: true});
    const hideModal = () => handleUpdateNote({...currentNotes, editing: false});

    const handleUpdate = (updatedNote) => {
      handleUpdateNote({...updatedNote, editing: false});
    };

    return(
        <li className="list" key={currentNotes.id}>
          {currentNotes.title} : {currentNotes.content}

          <button onClick={this.props.handleRemoveNote.bind(null, currentNotes)}>Remove</button>
          <button onClick={showModal}>Edit</button>
          <Modal show={currentNotes.editing} hideModal={hideModal}>
            <NoteCreateForm note={currentNotes} handleComplete={handleUpdate}/>
          </Modal>
        </li>
    )
  }
}
