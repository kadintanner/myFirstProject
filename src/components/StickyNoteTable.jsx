import AddNoteButton from "./AddNoteButton"
import StickyTableColumn from "./StickyTableColumn"
import StickyTableRow from "./StickyTableRow"
import axios from 'axios'

const StickyNoteTable = () => {

    const addNote = async () => {

    }

    const deleteNote = async () => {

    }

    return (

        <div>
            <table>
                <thead>
                    <StickyTableColumn />
                </thead>

                <tbody>
                    <StickyTableRow />
                </tbody>

                <tfoot>
                    <AddNoteButton />
                </tfoot>
            </table>
        </div>


    )
}



export default StickyNoteTable