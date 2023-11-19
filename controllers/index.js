import { GameModel } from "../database/models/index.js"

export const getGames = async () => {
    const games = await GameModel.find({ state : "Active" })

    return games
}