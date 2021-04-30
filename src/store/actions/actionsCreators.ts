import { ACTIONS } from '../constants';

export const setTool = (tool: string) => ({
  type: ACTIONS.SET_TOOL,
  payload: tool
});
