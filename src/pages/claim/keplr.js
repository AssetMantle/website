import {QueryClientImpl} from 'cosmjs-types/cosmos/staking/v1beta1/query';
import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {createProtobufRpcClient, QueryClient} from "@cosmjs/stargate";
import Long from "long";

const { SigningStargateClient } = require("@cosmjs/stargate");
const config = require("./config.json");

const tendermintRPCURL = config.tendermintRPC;
const osmosisChainID = config.mainNetChainID;
const stakingDenom = config.coinDenom;
const maxGas = 250000;
const MicroFactor = 1000000;


async function getKeplrWallet(chainID) {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else {
        try {
            await window.keplr.enable(chainID)
            let offlineSigner = await window.keplr.getOfflineSignerAuto(chainID);
            let accounts = await offlineSigner.getAccounts();
            console.log(accounts);
            return [offlineSigner, accounts[0].address];
        } catch (e) {
            console.log(e);
        }
    }
}

async function getOsmosBalance(wallet,validatorAddress){
    const client = await SigningStargateClient.connect(
        tendermintRPCURL,
    );
    const balance = await client.getBalance(wallet[1],"umntl");
    const delegatedBalance = await client.getDelegation(wallet[1],validatorAddress);
    return {
        'balance': (balance.amount/MicroFactor),
        'delegatedBalance': (delegatedBalance.amount/MicroFactor)};
}

async function RpcClient() {
    const tendermintClient = await Tendermint34Client.connect(tendermintRPCURL);
    const queryClient = new QueryClient(tendermintClient);
    return createProtobufRpcClient(queryClient);
}

async function getValidators(){

    const rpcClient = await RpcClient();

    const stakingQueryService = new QueryClientImpl(rpcClient);

    let key = new Uint8Array();
    let validators = [];

    do {
        const response = await stakingQueryService.Validators({
            status: false,
            pagination: {
                key: key,
                offset: Long.fromNumber(0, true),
                limit: Long.fromNumber(0, true),
                countTotal: true
            }
        });
        key = response.pagination.nextKey;
        validators.push(...response.validators);
    } while (key.length !== 0);
    return validators;
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

export { getKeplrWallet, Transaction, getTxFee, getOsmosBalance, getValidators };
