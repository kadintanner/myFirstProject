import React from 'react';

const StickyNote = () => {
  return (
    <td 
        colSpan={4}
        id='sticky-note'
    >
        <input 
            id="text-input"
            type="text"
            defaultValue="type here"
            />
            <br></br>
            <br></br>
            <br></br>
        <button id='delete-button'>Delete</button>
    </td>
  );
}

export default StickyNote;
