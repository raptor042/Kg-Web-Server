import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import connectDB from "./__db__/index.js"
import { activate, deactivate, getGames } from "./controllers/index.js"
import { balance, transfer } from "./__web3__/index.js"

connectDB()

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/activate/:id", async (req, res) => {
    const response = await activate(req.params.id)
    console.log(response)

    res.status(200).send(response)
})

app.get("/deactivate/:id", async (req, res) => {
    const response = await deactivate(req.params.id)
    console.log(response)

    res.status(200).send(response)
})

app.get("/games", async (req, res) => {
    const games = await getGames()
    console.log(games)

    res.status(200).json({ ...games[0] })
})

app.get("/balance/:account", async (req, res) => {
    const { account } = req.params
    const _balance = await balance(account)

    res.status(200).json({ _balance })
})

app.get("/transfer/:from/:to/:amount", async (req, res) => {
    const { from, to, amount } = req.params
    await transfer(from, to, amount)

    res.status(200).send("Successful")
})

app.listen(process.env.PORT || 8000, (err) => {
    err ? console.log(err) : console.log(`Connection at 8000 is successful.`)
})