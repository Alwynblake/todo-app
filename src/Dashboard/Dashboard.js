import React from 'react';
import uuidv1 from 'uuid/v1';
import NoteItem from '../NoteItem/NoteItem';
import NoteCreateForm from '../NoteCreateForm/NoteCreateForm';
import NoteList from '../NoteList/NoteList';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      title: '',
      content: '',
    };
  }

  addNote = (note) => {
    note.id = uuidv1();

    this.setState({
      notes: [...this.state.notes, note],
    });
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
    event.preventDefault();

    this.addNote(this.state);

    this.setState({ title: '', content: '' });
  };


  // handleRemoveExpense = (event) => {
  //   this.setState(previousState => ({
  //     event: previousState.event.filter(currentNote => currentNote.id !== event.id),
  //   }));


  render() {
    console.log(this.state);
    return (
        <div>
  <NoteCreateForm
      handleTitle={this.handleTitle}
      handleContent={this.handleContent}
      handleSubmit={this.handleSubmit}
  />
          <NoteList
              notes={this.state.notes}/>

        </div>

    );
  }
}
