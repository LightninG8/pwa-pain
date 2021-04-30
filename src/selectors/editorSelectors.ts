import { State } from 'types';

export const activeToolSelector = ({editorReducer}: State) => ({
  activeTool: editorReducer.activeTool
});
