import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    userId : { 
        type : Number, 
        required : true 
    },
    username : String,
    address : String,
    referral_link : String,
    balance : { 
        type : Number,
        default : 0
    }
})

export const UserModel = model("User", UserSchema)

const GameSchema = new Schema({
    winner : Number,
    stake : { 
        type : Number,
        default : 0
    },
    gameId : { 
        type : String, 
        required : true 
    },
    players : [
        {
            userId : Number,
            username : String,
            tanks : Number
        }
    ],
    state : {
        type : String, 
        enum : ["Active", "Inactive", "Deactive"], 
        default : "Inactive"
    },
    duration : { 
        type : Number,
        min : 1,
        max : 3,
        required : true
    }
})

export const GameModel = model("Game", GameSchema)