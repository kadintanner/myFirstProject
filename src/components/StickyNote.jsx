import React from 'react';
import deleteNote from './StickyTableRow';

const StickyNote = ({ onDelete, id }) => {
    const handleDelete = () => {
        onDelete(id)
    }
  return (
    <>
    <td 
        colSpan={4}
        id='sticky-note'
    >
        {/* <input 
            id="text-input"
            type="text"
            defaultValue="type here"
            /> */}
            <textarea id="text-area" rows="14" cols="10" wrap="soft"> </textarea>
            <br></br>
        <button 
            id='delete-button'
            onClick={handleDelete}
        >
            Delete
        </button>
    </td>
    </>
  );
}

export default StickyNote;
