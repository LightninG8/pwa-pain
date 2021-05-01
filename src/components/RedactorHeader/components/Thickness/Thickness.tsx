import s from './Thickness.module.css';
import cs from 'styles/common.module.css';
import { thicknessList } from './constants';

import { useSelector, useDispatch } from 'react-redux';
import { activeThicknessSelector, activeToolSelector } from 'selectors';
import { setThickness } from 'store';

import { Tooltip } from '@material-ui/core';
import { ToolsGroup } from 'components';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import { blockedTools } from 'store';

export const Thickness = () => {
  const dispatch = useDispatch();

  const { activeTool } = useSelector(activeToolSelector);
  const { activeThickness } = useSelector(activeThicknessSelector);


  const thicknes = thicknessList.map((item) => {
    const onIThicknessClick = (thickness: number) => {
      if ( activeThickness !== thickness) {
        dispatch(setThickness(thickness));
      }
    };

    const classNames = [cs.tool, s.listItem];
    item.value === activeThickness ? classNames.push(cs.activeTool) : null;

    return (
      <Tooltip
        title={`${item.value} пкс`}
        key={item.value}>
        <li
          className={classNames.join(' ')}
          onClick={() => onIThicknessClick(item.value)}>
          <div style={{height: item.value + 'px'}}></div>
        </li>
      </Tooltip>
    );
  });

  const isDisabled = blockedTools.thickness.includes(activeTool);

  return (
    <ToolsGroup
      title='Толщина'
      popup={true}
      list={true}
      icon={<LineWeightIcon/>}
      disabled={isDisabled}>
      <ul className={s.list}>
        { thicknes }
      </ul>
    </ToolsGroup>
  );
};
