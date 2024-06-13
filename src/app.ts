import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes/route'
const app: Application = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/api', router);

console.log(process.cwd())

export default app