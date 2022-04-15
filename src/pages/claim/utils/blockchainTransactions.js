import {DelegateMsg, DepositMsg, VoteMsg} from "./protoMsgHelper";
import {coinDenom, getKeplrWallet, getTxFee, MicroFactor, Transaction} from "./keplr";

async function delegateCoinTx(source, validatorAddress, amount) {
    try {
        const [offlineSigner, delegatorAddress] = await getKeplrWallet();
        const delegateMsg = DelegateMsg(delegatorAddress, validatorAddress, amount * MicroFactor, coinDenom);
        const txFee = getTxFee();
        const response = await Transaction(offlineSigner, delegatorAddress, [delegateMsg], txFee);
        return response;
    } catch (e) {
        console.log(e);
    }
}

async function voteProposalTx(proposalId, option) {
    try {
        const [offlineSigner, voterAddress] = await getKeplrWallet();
        const voteProposalMsg = VoteMsg(proposalId, voterAddress, option);
        console.log(voteProposalMsg);
        const txFee = getTxFee();
        const response = await Transaction(offlineSigner, voterAddress, [voteProposalMsg], txFee);
        console.log(response);
        return response;
    } catch (e) {
        console.log(e);
    }
}

async function depositToProposal(proposalId, amount) {
    try {
        const [offlineSigner, depositor] = await getKeplrWallet();
        const depositMsg = DepositMsg(proposalId, depositor, amount);
        const txFee = getTxFee();
        const response = await Transaction(offlineSigner, depositor, [depositMsg], txFee);
        console.log(response);
        return response;
    } catch (e) {
        console.log(e);
    }
}

export {delegateCoinTx, voteProposalTx, depositToProposal}
