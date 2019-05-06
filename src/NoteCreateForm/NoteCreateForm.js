import React from 'react';

const NoteCreateForm = ({ handleTitle, handleContent, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <input
          name='title'
          placeholder='title'
          type='text'
          onChange={handleTitle}
      />

      <textarea
          name='content'
          placeholder='note content'
          type='text'
          cols='30'
          rows='10'
          onChange={handleContent}
      />

      <button type='submit'>Create Note</button>
    </form>
);

export default NoteCreateForm;

