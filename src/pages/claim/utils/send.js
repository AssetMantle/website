import {getKeplrWallet, getTxFee, Transaction} from './keplr.js'
import {SendMsg} from './protoMsgHelpr'
import {config} from "dotenv";

const MicroFactor = 1000000;

async function sendCoinTx(toAddress, chain, amount) {
    try {
        const wallet = await getKeplrWallet(config.chainId);
        const txFee = getTxFee();
        const msg = SendMsg(wallet[1], toAddress, amount * MicroFactor, config.denom);
        const response = await Transaction(wallet[0], wallet[1], [msg], txFee, "", config.rpc);
        return (response.transactionHash, response.code);
    } catch (e) {
        return (e);
        console.log(e);
    }
}

export {sendCoinTx}

