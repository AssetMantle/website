const { SigningStargateClient } = require("@cosmjs/stargate");

const comdexChainID = "cosmoshub-4";
const stakingDenom = "uatom";
const maxGas = 250000;


async function getKeplrWallet(chainID) {
  if (!window.keplr) {
    alert("Please install keplr extension");
  } else {
    try {
      await window.keplr.enable(comdexChainID)
      let offlineSigner = window.keplr.getOfflineSigner(chainID);
      let accounts = await offlineSigner.getAccounts();
      return [offlineSigner, accounts[0].address];
    } catch (e) {
      console.log(e);
    }
  }
}



async function Transaction(
  wallet,
  signerAddress,
  msgs,
  fee,
  memo = "",
  rpcEndpoint
) {
  const cosmJS = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet
  );
  return await cosmJS.signAndBroadcast(signerAddress, msgs, fee, memo);
}

function getTxFee(amount = 0, gas = maxGas) {
  return {
    amount: [{ amount: String(amount), denom: stakingDenom }],
    gas: String(gas),
  };
}

export { getKeplrWallet, Transaction, getTxFee };
