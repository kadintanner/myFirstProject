let TEST_DATA = [
    { id: 1, name: `note1`, note: 'hello' },
    { id: 2, name: `note2`, note: 'world' },
    { id: 3, name: `note3`, note: '007' }
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
            name: `note${globalId}`
        }
        console.log(newObj)
        //add this newObj to TEST_DATA
        TEST_DATA.push(newObj)

        //increment my globalId for next newObj creation
        globalId++

        // send back the newObj
        res.send(TEST_DATA)
    },

    deleteNote:  (req, res) => {
        // need to grab id from params
        const id = req.params.id 
        
        // remove the element with said id from TEST_DATA
        TEST_DATA = TEST_DATA.filter((note) => note.id !== +id)

        res.send(TEST_DATA)

    },

    saveNotes: (req, res) => {

        const notes = req.body
        TEST_DATA = notes

        res.send(TEST_DATA)

    }
}

export default handlerFunctions