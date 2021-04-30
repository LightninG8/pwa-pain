import { ACTIONS } from '../store/constants/actionsNames';

export interface SetToolAction {
  type: typeof ACTIONS.SET_TOOL;
  payload: string;
}

export type Action = SetToolAction;
