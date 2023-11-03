import AddNoteButton from "./AddNoteButton"

import StickyTableRow from "./StickyTableRow"
import axios from 'axios'
import React, { useState, useEffect } from "react"


const StickyNoteTable = () => {

    const [data, setData] = useState([])

    const addNote = () => {
        axios.post('/addNote').then( (res) => {
            setData(res.data)
        })
    }

const deleteNote = (id) => {
    axios.delete(`/deleteNote/${id}`).then( (res) => {
        setData(res.data)
    })
}

useEffect( () => {
    axios.get('/getNote').then( (res) => {
        setData(res.data)
    })
},[])

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
