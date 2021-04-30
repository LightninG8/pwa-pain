import { editorState } from '../../constants';
import { EditorState, Action } from 'types';
import { ACTIONS } from '../../constants';

export const editorReducer = (state = editorState, action: Action): EditorState => {
  switch (action.type) {
    case ACTIONS.SET_TOOL:
      return {
        ...state,
        activeTool: action.payload,
      };
    default: return state;
  }
};
