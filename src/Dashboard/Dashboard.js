import React from 'react';
import uuidv1 from 'uuid/v1';
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

  handleSubmit = async (event) => {
    event.preventDefault();

   await this.addNote(this.state.title,this.state.content);
console.log(this.state,'saadadasdadad');
  };

  handleRemoveNote = (note) => {
    this.setState(previousState => ({
      notes: previousState.notes.filter(currentNotes => currentNotes.id !== note.id),
    }));
  };

/////////////////
  handleUpdateNote = (note) =>
      this.setState((previousState) => {
        const updateNotes = previousState.notes.map(currentNote =>
        note.id === currentNote.id ? note : currentNote
        );
        return { notes: updateNotes };

      });
  ///////////////
  render(){
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
            handleUpdateNote={this.handleUpdateNote}

    />
          {/*<NoteCreateForm handleComplete={this.handleAddNote}/>*/}
          {/*{ this.renderNotes() }*/}
        </div>

    );
  }
}
