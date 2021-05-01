import cs from 'styles/common.module.css';
import s from './Instruments.module.css';

import { Tooltip } from '@material-ui/core';
import { instrumentsList } from './constants';
import { useSelector, useDispatch } from 'react-redux';
import { activeToolSelector } from 'selectors';
import { setTool } from 'store';

import { ToolsGroup } from 'components';

export const Instruments = () => {
  const dispatch = useDispatch();
  const { activeTool } = useSelector(activeToolSelector);

  const instruments = instrumentsList.map((item) => {
    const onInstrumentClick = (tool: string) => {
      if ( activeTool !== tool) {
        dispatch(setTool(tool));
      }
    };

    const classNames = [cs.tool];
    item.value === activeTool ? classNames.push(cs.activeTool) : null;

    return (
      <Tooltip key={item.value} title={item.name} enterDelay={1000}>
        <div className={classNames.join(' ')} onClick={() => onInstrumentClick(item.value)}>
          {item.icon}
        </div>
      </Tooltip>
    );
  });

  return (
    <ToolsGroup title='Инструменты'>
      <div className={s.tools}>
        {instruments}
      </div>
    </ToolsGroup>
  );
};
