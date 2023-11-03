import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

// import handler functions from controller.js
import handlerFunctions from './controller.js'

// input routes here:
app.get('/getNote', handlerFunctions.getNote)
app.post('/addNote', handlerFunctions.addNote)
app.delete('/deleteNote/:id', handlerFunctions.deleteNote)
app.put('/editNote/:id', handlerFunctions.editNote)

// Open up a door to the server
ViteExpress.listen(app, 8488, () => console.log('http://localhost:8488'))

