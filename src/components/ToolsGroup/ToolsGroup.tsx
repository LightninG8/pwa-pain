import s from './ToolsGroup.module.css';

import { Popup } from 'semantic-ui-react';

type Props = {
  title: string;
  children: any;
  popup?: boolean;
  icon?: any;
  list?: boolean;
  disabled?: boolean;
}

export const ToolsGroup = ({title, children, popup, icon, list, disabled}: Props) => {
  const customPopupStyles = {
    padding: 5,
    zIndex: 10,
    borderRadius: 0,
    transform: 'translateY(-10px)',
  };

  const alwaysPopupStyles = {
    ...customPopupStyles,
    padding: 0,
  };

  if (popup) {
    const classNames = [s.trigger];
    disabled ? classNames.push(s.toolsGroupDisabled) : null;

    const popupTrigger = (
      <div className={classNames.join(' ')}>
        <div className={s.triggerIcon}>{icon}</div>
        <div className={s.triggerTitle}>{title}</div>
        <div className={s.triggerArrow}>▾</div>
      </div>
    );

    const popupTitle = list ? null : <h6 className={s.title}>{title}</h6>;

    const popupStyles = list ? alwaysPopupStyles : customPopupStyles;

    return (
      <div className={s.toolsGroup + ' ' + s.toolsGroupBorder}>
        <Popup
          style={popupStyles}
          trigger={popupTrigger}
          position='bottom center'
          flowing
          basic
          disabled={disabled}
          on='click'>
          <div className={s.toolsGroup}>
            {children}
            {popupTitle}
          </div>
        </Popup>
      </div>
    );
  }

  return (
    <div className={s.toolsGroup + ' ' + s.toolsGroupBorder}>
      {children}
      <h6 className={s.title}>{title}</h6>
    </div>
  );
};
