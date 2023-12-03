import { config } from "dotenv"
import { ethers } from "ethers"

config()

const { BSC_TESTNET, PRIVATE_KEY } = process.env

export const EMPIRE = "0x0093D963A9955E6Ccc8BcE2633a260c0A27E9316"

export const getProvider = () => {
    return new ethers.JsonRpcProvider(BSC_TESTNET)
}

export const getSigner = () => {
    return new ethers.Wallet(PRIVATE_KEY, getProvider())
}