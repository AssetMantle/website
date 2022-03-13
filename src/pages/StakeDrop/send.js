import { getKeplrWallet, getTxFee, Transaction } from "./keplr.js";
import { SendMsg } from "./protoMsgHelpr";

const MicroFactor = 1000000;

const chainConfig = require("./config.json");

function getProperty(json, field) {
  if (json == null || field == null) {
    return null;
  }
  var value = json;
  var fields = field.split(".");
  for (var i = 0; i < fields.length; i++) {
    value = value[fields[i]];
    if (value == null) {
      return null;
    }
  }
  return value;
}

async function sendCoinTx(toAddress, chain, amount) {
  try {
    const currentChain = getProperty(chainConfig, chain);
    const wallet = await getKeplrWallet(currentChain.chainId);
    const txFee = getTxFee();
    const msg = SendMsg(
      wallet[1],
      toAddress,
      amount * MicroFactor,
      currentChain.denom
    );
    const response = await Transaction(
      wallet[0],
      wallet[1],
      [msg],
      txFee,
      "",
      currentChain.rpc
    );
    return response.transactionHash, response.code;
  } catch (e) {
    return e;
    console.log(e);
  }
}

export { sendCoinTx, getProperty };
