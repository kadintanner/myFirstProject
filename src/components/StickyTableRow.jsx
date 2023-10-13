import StickyNote from "./StickyNote"

const StickeyTableRow = ({data}) => {

    return (
        <>
            <tr>
                <StickyNote />
            </tr>

            <tr>
                <StickyNote />
            </tr>

        </>
            
    )
}

export default StickeyTableRow