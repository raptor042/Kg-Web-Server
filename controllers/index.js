import { GameModel } from "../database/models/index.js"

export const getGames = async () => {
    try {
        const games = await GameModel.find({ state : "Active" })

        return games
    } catch (err) {
        console.log(err)
    }
}

export const deactivate = async (id) => {
    try {
        const game = await GameModel.findOneAndUpdate({ gameId : id }, { state : "Inactive" })
        console.log(game, id)

        return game ? "Success" : "Failed"
    } catch (err) {
        console.log(err)
    } 
}