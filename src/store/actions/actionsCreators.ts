import { ACTIONS } from '../constants';

export const setTool = (tool: string) => ({
  type: ACTIONS.SET_TOOL,
  payload: tool
});

export const setThickness = (thickness: number) => ({
  type: ACTIONS.SET_THICKNESS,
  payload: thickness
});

export const setColorNum = (number: number) => ({
  type: ACTIONS.SET_COLOR_NUM,
  payload: number
});

export const setColor = (color: string) => ({
  type: ACTIONS.SET_COLOR,
  payload: color
});
