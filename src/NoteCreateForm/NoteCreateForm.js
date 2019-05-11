import React from 'react';

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
          type='text'
          cols='20'
          rows='5'
          onChange={handleContent}
      />
          </li>
      <button type='submit'>Create Note</button>

    </form>

    </ul>
);

export default NoteCreateForm;

