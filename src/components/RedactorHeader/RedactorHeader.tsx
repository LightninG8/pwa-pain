import s from './RedactorHeader.module.css';

import { Instruments, Thickness, Colors } from './components';

// import SpellcheckIcon from '@material-ui/icons/Spellcheck';
// import LineWeightIcon from '@material-ui/icons/LineWeight';

export const RedactorHeader = () => {
  return (
    <header className={s.header}>
      <div className={s.headerBody}>
        <Instruments/>
        <Thickness/>
        <Colors/>
      </div>
    </header>
  );
};

