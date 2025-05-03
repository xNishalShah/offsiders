import express from 'express'
const app = express()
import userRouter from './routes/user'

app.use("/api/v1/user",userRouter)