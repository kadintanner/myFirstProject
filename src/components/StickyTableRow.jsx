import StickyNote from "./StickyNote"
import React from "react"

const StickeyTableRow = ({ data, onDelete }) => {

    return (
        <>
            <tr>
                <td colSpan={4}>
                    <StickyNote id={data.id} onDelete={onDelete} />
                </td>
            </tr>
        </>
    )
}

export default StickeyTableRow