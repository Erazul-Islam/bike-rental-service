import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes/route'
import globalErrorHandler from './app/modules/middleWares/globalErrorHandler'
import notFound from './app/modules/middleWares/notFound'
const app: Application = express()
const port = 3000

const corsOptions = {
    origin: 'http://localhost:5173', // Allow only this origin
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization' // Allow only specific headers
};

app.use(express.json())
app.use(cors(corsOptions))

app.use('/api', router);

console.log(process.cwd())

app.use(globalErrorHandler)
app.use(notFound);

export default app