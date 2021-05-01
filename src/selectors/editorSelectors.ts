import { State } from 'types';

export const activeToolSelector = ({editorReducer}: State) => ({
  activeTool: editorReducer.activeTool
});

export const activeThicknessSelector = ({editorReducer}: State) => ({
  activeThickness: editorReducer.activeThickness
});

export const paletteSelector = ({editorReducer}: State) => ({
  palette: editorReducer.palette
});

export const colorsSelector = ({editorReducer}: State) => ({
  colorNum: editorReducer.colorNum,
  colors: editorReducer.colors,
});
