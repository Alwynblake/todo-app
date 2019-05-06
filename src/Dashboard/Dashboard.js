import React from 'react';
import uuidv1 from 'uuid/v1';

import NoteCreateForm from '../NoteCreateForm/NoteCreateForm';

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
    note.id = uuidv1()

    this.setState({
      notes: [...this.state.notes, note],
    });
  };

// handleChange = (event) => {
//     // let name equals event.target.name
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

  render() {
    console.log(this.state);
    return (
  <NoteCreateForm
      handleTitle={this.handleTitle}
      handleContent={this.handleContent}
      handleSubmit={this.handleSubmit}
  />
    );
  }
}
