import { GameModel } from "../__db__/models/index.js"

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

export const deactivate = async (id) => {
    try {
        const game = await GameModel.findOneAndDelete({ gameId : id, state : "Active" })
        console.log(game, id)

        return game ? "Success" : "Failed"
    } catch (err) {
        console.log(err)
    } 
}