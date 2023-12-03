import { connect } from "mongoose"
import dotenv from "dotenv"

const { config } = dotenv

config()

const URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await connect(`${URI}`)
        console.log("Connection to the Database was successful.")
    } catch(err) {
        console.log(err)
    }
}

export default connectDB