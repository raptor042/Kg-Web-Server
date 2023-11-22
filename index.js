import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import connectDB from "./database/index.js"
import { deactivate, getGames } from "./controllers/index.js"

connectDB()

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/games", async (req, res) => {
    const games = await getGames()
    console.log(games)

    res.status(200).json({ ...games[0] })
})

app.get("/deactivate/:id", async (req, res) => {
    const response = await deactivate(req.params.id)
    console.log(response)

    res.status(200).send(response)
})

app.listen(process.env.PORT || 8000, (err) => {
    err ? console.log(err) : console.log(`Connection at 8000 is successful.`)
})