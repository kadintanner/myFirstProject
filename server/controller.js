let TEST_DATA = [
    { id: 1, name: `note${data.length}` },
    { id: 2, name: `note${data.length}` },
    { id: 3, name: `note${data.length}` }
]

let globalId = 4

const handlerFunctions = {

    getNote: (req, res) => {
        res.send(TEST_DATA)
    },

    addNote: (req, res) => {

        //creat a new object
        const newObj = {
            id: globalId,
            name: `note${data.length}`
        }
        console.log(newObj)
        //add this newObj to TEST_DATA
        TEST_DATA.push(newObj)

        //increment my globalId for next newObj creation
        globalId++

        // send back the newObj
        res.send(newObj)
    },

    deleteInvoice:  (req, res) => {
        // need to grab id from params
        const id = req.params.id 
        
        // remove the element with said id from TEST_DATA
        TEST_DATA = TEST_DATA.filter((note) => note.id !== +id)

        res.send(TEST_DATA)

    },

    editNote: (req, res) => {

        const { id } = req.params

        const index = TEST_DATA.findIndex(note => note.id == id)
        const noteItem = TEST_DATA[index]

        res.send(noteItem)

    }
}

export default handlerFunctions