const comdex_rpc = "https://rpc.comdex.one/";
const comdex_lcd = "https://rest.comdex.one/";
const comdexChainId = "comdex-1";
const comdexChainName = "Comdex";

async function initializeKeplrForComdex() {
  if (!window.keplr) {
    alert("Please install keplr extension");
  } else {
    await setComdexChain();
    await window.keplr.enable(comdexChainId);
  }
}

async function setComdexChain() {
  await window.keplr.experimentalSuggestChain({
    chainId: comdexChainId,
    chainName: comdexChainName,
    rpc: comdex_rpc,
    rest: comdex_lcd,
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

export { initializeKeplrForComdex };
