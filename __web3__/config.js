import { config } from "dotenv"
import { ethers } from "ethers"

config()

const { BSC_TESTNET, PRIVATE_KEY } = process.env

export const EMPIRE = "0x472D49EBa822A866e2dab44a4e85A3Ea97AC6fB2"

export const getProvider = () => {
    return new ethers.JsonRpcProvider(BSC_TESTNET)
}

export const getSigner = () => {
    return new ethers.Wallet(PRIVATE_KEY, getProvider())
}