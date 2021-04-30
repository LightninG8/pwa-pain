import s from './RedactorHeader.module.css';

import { Instruments } from './components';

import { ToolsGroup } from 'components';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';


export const RedactorHeader = () => {
  return (
    <header className={s.header}>
      <div className={s.headerBody}>
        <ToolsGroup title='Цвета'>
          1234
        </ToolsGroup>
        <ToolsGroup title='Инструменты'>
          <Instruments/>
        </ToolsGroup>
        <ToolsGroup title='Инструменты' type='popup' icon={<SpellcheckIcon/>}>
          <Instruments/>
        </ToolsGroup>
      </div>
    </header>
  );
};

