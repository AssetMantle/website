import {bech32} from "bech32";

function getMantleAddress(address) {
    try {
        return bech32.encode("mantle", bech32.decode(address).words);
    } catch (e) {
        console.log(e);
        return "";
    }
}

export {getMantleAddress}
// console.log(getMantleAddress("osmo1x53dugvr4xvew442l9v2r5x7j8gfvgedze9y0m"))