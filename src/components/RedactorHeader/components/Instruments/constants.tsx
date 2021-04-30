import CreateIcon from '@material-ui/icons/Create';
import ColorizeIcon from '@material-ui/icons/Colorize';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import SearchIcon from '@material-ui/icons/Search';
import LensIcon from '@material-ui/icons/Lens';

export const instrumentsList = [
  {
    name: 'Карандаш',
    value: 'pencil',
    icon: <CreateIcon/>,
  },
  {
    name: 'Заливка цветом',
    value: 'fill',
    icon: <FormatColorFillIcon/>,
  },
  {
    name: 'Текст',
    value: 'text',
    icon: <FontDownloadIcon/>,
  },
  {
    name: 'Ластик',
    value: 'eraser',
    icon: <LensIcon/>,
  },
  {
    name: 'Палитра',
    value: 'palette',
    icon: <ColorizeIcon/>,
  },
  {
    name: 'Масштаб',
    value: 'scale',
    icon: <SearchIcon/>,
  }
];
