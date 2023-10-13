import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

// import handler functions from controller.js

// input routes here:

ViteExpress.listen(app, 8488, () => console.log('D&C http://localhost:8488'))

