const AddNoteButton = ({addNoteFunc}) => {

    return (
        <tr>
            <td colSpan={4} >

                <button
                    id="add-button"
                    onClick={addNoteFunc}
                >
                    Add New Note
                </button>

            </td>
        </tr>
    )
}

export default AddNoteButton
