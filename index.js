import express, { Router } from "express"
import bodyParser from "body-parser"
import cors from "cors"
import ServerlessHttp from "serverless-http"
import connectDB from "./database/index.js"
import { getGames } from "./controllers/index.js"

connectDB()

const app = express()
const router = Router()

app.use(cors())
app.use(bodyParser.json())

router.get("/games", async (req, res) => {
    const games = await getGames()
    console.log(games)

    res.json({ ...games[0] })
})

app.use("/api/", router)

export const handler = ServerlessHttp(app)