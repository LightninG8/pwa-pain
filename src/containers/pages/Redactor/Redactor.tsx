import {
  RedactorHeader,
  RedactorMain,
  RedactorFooter
} from 'components';
import s from './Redactor.module.css';

export const Redactor = () => {
  return (
    <div className={s.redactor}>
      <RedactorHeader />
      <RedactorMain />
      <RedactorFooter/>
    </div>
  );
};
