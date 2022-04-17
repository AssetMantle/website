import {VoteOption} from "cosmjs-types/cosmos/gov/v1beta1/gov";

export const OPTIONS = {
    "Yes": VoteOption.VOTE_OPTION_YES,
    "Abstain": VoteOption.VOTE_OPTION_ABSTAIN,
    "No": VoteOption.VOTE_OPTION_NO,
    "NoWithVeto": VoteOption.VOTE_OPTION_NO_WITH_VETO
};