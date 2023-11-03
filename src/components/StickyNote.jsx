import React from 'react';
import deleteNote from './StickyTableRow';

const StickyNote = ({ onDelete, id, text, onValueChange }) => {
    const handleDelete = () => {
        onDelete(id)
    }
  return (
    <td 
        colSpan={4} 
        id='sticky-note'
    >
        <textarea 
            id="text-area" 
            rows="14" 
            cols="10" 
            wrap="soft"
            value={text}
            onChange={(e) => onValueChange(e.target.text)}
        />
            <br></br>
        <button 
            id='delete-button'
            onClick={handleDelete}
        >
            Delete
        </button>
    </td>
  );
}

export default StickyNote;
