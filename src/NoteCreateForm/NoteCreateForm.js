import React from 'react';
import './NoteCreateForm.scss';

const NoteCreateForm = ({ handleTitle, handleContent, handleSubmit }) => (
    <ul>
    <form onSubmit={handleSubmit}>
<li>
      <input
          name='title'
          placeholder='title'
          type='text'
          onChange={handleTitle}
      />
</li>
          <li>
      <textarea
          name='content'
          placeholder='note content'
          cols='54'
          rows='2'
          onChange={handleContent}
      />
          </li>
      <button type='submit'>Create Note</button>

    </form>

    </ul>
);

export default NoteCreateForm;

