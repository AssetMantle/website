import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {createProtobufRpcClient} from "@cosmjs/stargate";
import {QueryClientImpl} from "cosmjs-types/cosmwasm/wasm/v1/query";


const {QueryClient} = require("@cosmjs/stargate");

const tendermintRPCURL = process.env.REACT_APP_TENDERMINT_RPC_ENDPOINT;

export const fetchValidators = () => {
    return async () => {
        try {
            const rpcClient = await RpcClient();
            const stakingQueryService = new QueryClientImpl(rpcClient);
            let key = new Uint8Array();
            let validators = [];
            do {
                const response = await stakingQueryService.Validators({
                    status: false,
                    pagination: {
                        key: key,
                        offset: 0,
                        limit: 1,
                        countTotal: true
                    }
                });
                key = response.pagination.nextKey;
                validators.push(...response.validators);
            } while (key.length !== 0);
        } catch (error) {
            console.log(error.message);
        }
    };
};

fetchValidators()

async function RpcClient() {
    const tendermintClient = await Tendermint34Client.connect(tendermintRPCURL);
    const queryClient = new QueryClient(tendermintClient);
    return createProtobufRpcClient(queryClient);
}


export default {
    fetchValidators,
    RpcClient,
};
