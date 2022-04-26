import {MsgSend} from "cosmjs-types/cosmos/bank/v1beta1/tx";
import {MsgBeginRedelegate, MsgDelegate, MsgUndelegate} from "cosmjs-types/cosmos/staking/v1beta1/tx";
// import {MsgDeposit} from "cosmjs-types/cosmos/gov/v1beta1/tx";
import {Deposit, Vote, VoteOption} from "cosmjs-types/cosmos/gov/v1beta1/gov";
import {
    MsgSetWithdrawAddress,
    MsgWithdrawDelegatorReward,
    MsgWithdrawValidatorCommission
} from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import {MsgTransfer} from "cosmjs-types/ibc/applications/transfer/v1/tx";
import {coin} from "@cosmjs/stargate";
import {stringToNumber, trimWhiteSpaces} from "./scripts";
import {OPTIONS} from "../constants/voteOptions";
import {config} from "dotenv";

const msgSendTypeUrl = "/cosmos.bank.v1beta1.MsgSend";
const msgDelegateTypeUrl = "/cosmos.staking.v1beta1.MsgDelegate";
const msgRedelegateTypeUrl = "/cosmos.staking.v1beta1.MsgBeginRedelegate";
const msgUnbondTypeUrl = "/cosmos.staking.v1beta1.MsgUndelegate";
const msgWithdrawRewardsTypeUrl = "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
const msgSetWithdrawAddressTypeUrl = "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
const msgTransferTypeUrl = "/ibc.applications.transfer.v1.MsgTransfer";
const msgValidatorCommission = '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission';
const msgVoteUrl = '/cosmos.gov.v1beta1.MsgVote';
const msgDeposit = '/cosmos.gov.v1beta1.MsgDeposit';
const msgSubmitProposalUrl ='/cosmos.gov.v1beta1.MsgSubmitProposal';

function SendMsg(fromAddress, toAddress, amount, denom) {
    return {
        typeUrl: msgSendTypeUrl,
        value: MsgSend.fromPartial({
            fromAddress: trimWhiteSpaces(fromAddress),
            toAddress: trimWhiteSpaces(toAddress),
            amount: [{
                denom: denom,
                amount: String(amount),
            }],
        }),
    };
}


function DelegateMsg(delegatorAddress, validatorAddress, amount, denom = config.coinDenom) {
    return {
        typeUrl: msgDelegateTypeUrl,
        value: MsgDelegate.fromPartial({
                delegatorAddress: delegatorAddress,
                validatorAddress: validatorAddress,
                amount: {
                    denom: denom,
                    amount: String(amount),
                },
            }
        ),
    };
}


function VoteMsg(proposalId,voterAddress,option){
    return {
        typeUrl: msgVoteUrl,
        value: Vote.fromPartial({
            proposalId: proposalId,
            voter: voterAddress,
            option: option,
        }),
    }
}

function DepositMsg(proposalId,depositor,amount) {
    return {
        typeUrl: msgDeposit,
        value: Deposit.fromPartial({
            proposalId: proposalId,
            depositor: depositor,
            amount: {
                denom: config.coinDenom,
                amount: String(amount),
            },
        })
    }
}

function RedelegateMsg(delegatorAddress, validatorSrcAddress, validatorDstAddress, amount) {
    return {
        typeUrl: msgRedelegateTypeUrl,
        value: MsgBeginRedelegate.fromPartial({
                delegatorAddress: delegatorAddress,
                validatorSrcAddress: validatorSrcAddress,
                validatorDstAddress: validatorDstAddress,
                amount: {
                    denom: config.coinDenom,
                    amount: String(amount),
                },
            }
        ),
    };
}

function UnbondMsg(delegatorAddress, validatorAddress, amount) {
    return {
        typeUrl: msgUnbondTypeUrl,
        value: MsgUndelegate.fromPartial({
                delegatorAddress: delegatorAddress,
                validatorAddress: validatorAddress,
                amount: {
                    denom: config.coinDenom,
                    amount: String(amount),
                },
            }
        ),
    };

}

function WithdrawMsg(delegatorAddress, validatorAddress) {
    return {
        typeUrl: msgWithdrawRewardsTypeUrl,
        value: MsgWithdrawDelegatorReward.fromPartial({
            delegatorAddress: delegatorAddress,
            validatorAddress: validatorAddress,
        }),
    };
}

function SetWithDrawAddressMsg(delegatorAddress, withdrawAddress) {
    return {
        typeUrl: msgSetWithdrawAddressTypeUrl,
        value: MsgSetWithdrawAddress.fromPartial({
            delegatorAddress: delegatorAddress,
            withdrawAddress: trimWhiteSpaces(withdrawAddress),
        }),
    };
}

function TransferMsg(channel, fromAddress, toAddress, amount, timeoutHeight, timeoutTimestamp, denom, port = "transfer") {
    return {
        typeUrl: msgTransferTypeUrl,
        value: MsgTransfer.fromPartial({
            sourcePort: port,
            sourceChannel: channel,
            token: coin(stringToNumber(amount), denom),
            sender: trimWhiteSpaces(fromAddress),
            receiver: trimWhiteSpaces(toAddress),
            timeoutHeight: {
                revisionNumber: timeoutHeight.revisionNumber,
                revisionHeight: timeoutHeight.revisionHeight,
            },
            timeoutTimestamp: timeoutTimestamp,
        }),
    };
}

function ValidatorCommissionMsg(address) {
    return {
        typeUrl: msgValidatorCommission,
        value: MsgWithdrawValidatorCommission.fromPartial({
            validatorAddress: address,
        }),
    };
}

export {
    SendMsg,
    DelegateMsg,
    RedelegateMsg,
    UnbondMsg,
    WithdrawMsg,
    SetWithDrawAddressMsg,
    TransferMsg,
    ValidatorCommissionMsg,
    VoteMsg,
    DepositMsg
};
