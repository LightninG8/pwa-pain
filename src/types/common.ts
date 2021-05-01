import { ACTIONS } from '../store/constants/actionsNames';

export interface SetToolAction {
  type: typeof ACTIONS.SET_TOOL;
  payload: string;
}

export interface SetThicknessAction {
  type: typeof ACTIONS.SET_THICKNESS;
  payload: number;
}

export type Action<P = Object> = {
  type: string;
  payload?: P;
};
