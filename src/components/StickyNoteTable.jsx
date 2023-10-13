import AddNoteButton from "./AddNoteButton"

import StickyTableRow from "./StickyTableRow"
import axios from 'axios'
import { useState } from "react"

let initialData = [
    {id: 0, name: "note1"},
    {id: 1, name: "note2"}
]

const StickyNoteTable = () => {

    const [data, setData] = useState(initialData)
    console.log(data)

    const addNote = () => {
        const newNote = {
            id: 2,
            name: "note3"
        }
        setData([...data, newNote])
    }

    const deleteNote = async () => {

    }

    return (

        <div>
            <table>
                <thead>
                  
                </thead>

                <tbody>
                    <StickyTableRow data={data}/>
                </tbody>

                <tfoot>
                    <AddNoteButton addNoteFunc={addNote} />
                </tfoot>
            </table>
        </div>


    )
}



export default StickyNoteTable