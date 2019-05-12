import React from 'react';
import uuidv1 from 'uuid/v1';
// import NoteItem from '../NoteItem/NoteItem';
import NoteCreateForm from '../NoteCreateForm/NoteCreateForm';
import NoteList from '../NoteList/NoteList';
// import NoteItem from "../NoteItem/NoteItem";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      content: '',
    };
  }

  addNote = (title,content) => {
    let id = uuidv1();
    // console.log(note,'add Note');
    this.setState(prev => ({
      notes: [...prev.notes,{title, content,id}],
    }));

  };

// handleChange = (event) => {
//     let name equals event.target.name
//     let { name, value } = event.target;
//
//     this.setState({ [name]:  value });
// }

  handleTitle = (event) => this.setState({ title: event.target.value });

  handleContent = (event) => this.setState({ content: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault()

    this.addNote(this.state.title,this.state.content);

    //this.setState({ title: '', content: '' });
  };
////////////////
//   example: var sample = [1, 2, 3]
//   example: var result = sample.filter(elem => elem !== 2)

  handleRemoveNote = (note) => {
    this.setState(previousState => ({
      notes: previousState.notes.filter(currentNotes => currentNotes.id !== note.id),
    }));
    // console.log('remobinh note!!!!!!!!!')
  };
  //
/////////////////
  render(){
    // console.log(this.state);
    return (
        <div>
  <NoteCreateForm
      handleTitle={this.handleTitle}
      handleContent={this.handleContent}
      handleSubmit={this.handleSubmit}
  />
    <NoteList
            notes={this.state.notes}
            handleRemoveNote={this.handleRemoveNote}
        />
        </div>

    );
  }
}
