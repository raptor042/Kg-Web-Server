import { config } from "dotenv"
import { ethers } from "ethers"

config()

const { BSC_TESTNET, PRIVATE_KEY } = process.env

export const EMPIRE_TOKEN = "0x472D49EBa822A866e2dab44a4e85A3Ea97AC6fB2"

export const EMPIRE_WALLET = "0xBD926935AB9EE431fB490AAe7A2d63eC2787a574"

export const getProvider = () => {
    return new ethers.JsonRpcProvider(BSC_TESTNET)
}

export const getSigner = () => {
    return new ethers.Wallet(PRIVATE_KEY, getProvider())
}