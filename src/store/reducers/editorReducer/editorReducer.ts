import { editorState } from '../../constants';
import { EditorState, Action } from 'types';
import { ACTIONS } from '../../constants';

export const editorReducer = (state = editorState, action: Action<any>): EditorState => {
  switch (action.type) {
    case ACTIONS.SET_TOOL:
      return {
        ...state,
        activeTool: action.payload,
      };
    case ACTIONS.SET_THICKNESS:
      return {
        ...state,
        activeThickness: action.payload,
      };
    case ACTIONS.SET_COLOR_NUM:
      return {
        ...state,
        colorNum: action.payload,
      };
    case ACTIONS.SET_COLOR:
      const newColors = state.colors.slice(0);

      newColors[state.colorNum] = action.payload;

      return {
        ...state,
        colors: newColors,
      };
    default: return state;
  }
};
