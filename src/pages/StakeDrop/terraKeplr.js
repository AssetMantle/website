const terra_rpc = "https://rpc-columbus.keplr.app";
const terra_lcd = "https://lcd-columbus.keplr.app";
const terraChainId = "columbus-5";
const terraChainName = "Terra";

async function initializeKeplrForTera() {
  if (!window.keplr) {
    alert("Please install keplr extension");
  } else {
    await setTerraChain();
    await window.keplr.enable(terraChainId);
  }
}

async function setTerraChain() {
  await window.keplr.experimentalSuggestChain({
    chainId: terraChainId,
    chainName: terraChainName,
    rpc: terra_rpc,
    rest: terra_lcd,
    bip44: {
      coinType: 330,
    },
    bech32Config: {
      bech32PrefixAccAddr: "terra",
      bech32PrefixAccPub: "terra" + "pub",
      bech32PrefixValAddr: "terra" + "valoper",
      bech32PrefixValPub: "terra" + "valoperpub",
      bech32PrefixConsAddr: "terra" + "valcons",
      bech32PrefixConsPub: "terra" + "valconspub",
    },
    currencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna",
      },
    ],
    stakeCurrency: {
      coinDenom: "LUNA",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna",
    },
    coinType: 330,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.03,
    },
  });
}

export { initializeKeplrForTera };
