import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./libs/db"
import indexRouter from "./routers"
// import swaggerUi from 'swagger-ui-express'
// import swaggerDocument from '../swagger/swagger-output.json'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json()) 
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.urlencoded({extended: true})) 
app.use(cors()) 
app.use(indexRouter)


app.listen(PORT, async() =>{
    await db.$connect()
    console.log(`Server running on port: ${PORT}`)
}) 