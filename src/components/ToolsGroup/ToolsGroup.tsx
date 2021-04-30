import s from './ToolsGroup.module.css';

import { Popup } from 'semantic-ui-react';

type Props = {
  title: string;
  children: any;
  type?: string;
  icon?: any;
}

export const ToolsGroup = ({title, children, type, icon}: Props) => {
  if (type === 'popup') {
    const popupTrigger = (
      <div className={s.trigger}>
        <div className={s.triggerIcon}>{icon}</div>
        <div className={s.triggerTitle}>{title}</div>
        <div className={s.triggerArrow}>▾</div>
      </div>
    );

    const popupStyles = {
      padding: 5,
      zIndex: 10,
      borderRadius: 0,
      transform: 'translateY(-10px)',
    };

    return (
      <div className={s.toolsGroup}>
        <Popup
          style={popupStyles}
          trigger={popupTrigger}
          flowing
          basic
          on='click'>
          <div className={s.toolsGroup}>
            {children}
            <h6 className={s.title}>{title}</h6>
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
