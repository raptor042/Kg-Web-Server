import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    userId : { 
        type : Number, 
        required : true 
    },
    username : String,
    address : String,
    balance : { 
        type : Number,
        default : 0 
    }
})

export const UserModel = model("User", UserSchema)

const GameSchema = new Schema({
    gameId : { 
        type : String, 
        required : true 
    },
    players : [
        {
            userId : Number,
            userbame : String,
            activeTanks : Number,
            reserveTanks : Number
        }
    ],
    state : {
        type : String, 
        enum : ["Active", "Inactive"], 
        default : "Inactive"
    },
    duration : { 
        type : Number,
        min : 1,
        max : 5,
        required : true
    },
    winner : String
})

export const GameModel = model("Game", GameSchema)