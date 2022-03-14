const { SigningStargateClient } = require("@cosmjs/stargate");

// Comdex custom config
const rpc = "https://rpc.comdex.one/";
const lcd = "https://rest.comdex.one";
const comdexChainID = "comdex-1";
const chainName = "Comdex";
let keplrSet = false;
const stakingDenom = "CMDX";
const maxGas = 250000;
const MicroFactor = 1000000;

//set comdex
async function initializeKeplr() {
  if (!window.keplr) {
    alert("Please install keplr extension1");
  } else {
    if (!keplrSet) {
      await setChain();
      await window.keplr.enable(comdexChainID);
      keplrSet = true;
    }
  }
}

async function getKeplrWallet(chainID) {
  if (!window.keplr) {
    alert("Please install keplr extension");
  } else {
    try {
      let offlineSigner = window.keplr.getOfflineSigner(chainID);
      let accounts = await offlineSigner.getAccounts();
      return [offlineSigner, accounts[0].address];
    } catch (e) {
      console.log(e);
    }
  }
}

initializeKeplr().catch((e) => console.log(e));

async function setChain() {
  await window.keplr.experimentalSuggestChain({
    chainId: comdexChainID,
    chainName: chainName,
    rpc: rpc,
    rest: lcd,
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "comdex",
      bech32PrefixAccPub: "comdex" + "pub",
      bech32PrefixValAddr: "comdex" + "valoper",
      bech32PrefixValPub: "comdex" + "valoperpub",
      bech32PrefixConsAddr: "comdex" + "valcons",
      bech32PrefixConsPub: "comdex" + "valconspub",
    },
    currencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        coinGeckoId: "comdex",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        coinGeckoId: "comdex",
      },
    ],
    stakeCurrency: {
      coinDenom: "CMDX",
      coinMinimalDenom: "ucmdx",
      coinDecimals: 6,
      coinGeckoId: "comdex",
    },
    coinType: 118,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.03,
    },
  });
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

export { initializeKeplr, getKeplrWallet, setChain, Transaction, getTxFee };
