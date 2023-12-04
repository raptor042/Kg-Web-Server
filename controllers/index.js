import { GameModel, UserModel } from "../__db__/models/index.js"
import { EMPIRE_WALLET } from "../__web3__/config.js"
import { transfer } from "../__web3__/index.js"

export const getUser = async (userId) => {
    try {
        const user = await UserModel.findOne({ userId })
        console.log(user)

        return user
    } catch (err) {
        console.log(err)
    }
}

export const getGames = async () => {
    try {
        const games = await GameModel.find({ state : "Inactive" })
        console.log(games.filter(game => game.players.length >= 2))

        return games.filter(game => game.players.length >= 2)
    } catch (err) {
        console.log(err)
    }
}

export const activate = async (id) => {
    try {
        const game = await GameModel.findOneAndUpdate({ gameId : id }, { state : "Active" })
        console.log(game, id)

        return game ? "Success" : "Failed"
    } catch (err) {
        console.log(err)
    }
}

export const deactivate = async (id, winner) => {
    try {
        const game = await GameModel.findOneAndUpdate({ gameId : id }, { state : "Deactive", winner })
        console.log(game, id)

        const user = await getUser(game.winner)

        const _transfer = await transfer(EMPIRE_WALLET, user.address, game.stake)

        return _transfer
    } catch (err) {
        console.log(err)
    } 
}