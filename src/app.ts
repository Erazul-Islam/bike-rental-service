import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
const port = 3000

app.use(express.json())
app.use(cors())

console.log(process.cwd())

export default app