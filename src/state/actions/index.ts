import { ActionType } from "../actionTypes";

interface DepositAction {
  type: ActionType.DEPOSIT
  payload: number
}

interface WithdawAction {
  type: ActionType.WITHDRAW
  payload: number
}

interface BankruptAction {
  type: ActionType.BANKRUPT
}

export type Action = DepositAction | WithdawAction | BankruptAction 