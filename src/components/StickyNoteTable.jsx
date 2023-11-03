import AddNoteButton from "./AddNoteButton"

import StickyTableRow from "./StickyTableRow"
import axios from 'axios'
import React, { useState } from "react"

let initialData = [
    {id: 0, name: "note1"}
]

const StickyNoteTable = () => {

    const [data, setData] = useState(initialData)

    const addNote = () => {
        const newNote = {
            id: data.length,
            name: `note${data.length + 1}`
        }
        setData([...data, newNote])
    }

const deleteNote = (id) => {
    setData(data.filter(note => note.id !== id))
}

    return (
        <div>
            <table>
                <thead>
                  
                </thead>

                <tbody>
                    {data.map(note => (
                        <StickyTableRow key={note.id} data={note} onDelete={deleteNote} />
                    ))}

                </tbody>

                <tfoot>
                    <AddNoteButton addNoteFunc={addNote} />
                </tfoot>
            </table>
        </div>


    )
}



export default StickyNoteTable
