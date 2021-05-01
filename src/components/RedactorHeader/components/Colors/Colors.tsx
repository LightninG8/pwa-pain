import s from './Colors.module.css';
import cs from 'styles/common.module.css';

import { ToolsGroup } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { paletteSelector, colorsSelector } from 'selectors';
import { setColor, setColorNum } from 'store';

export const Colors = () => {
  const dispatch = useDispatch();

  const { palette } = useSelector(paletteSelector);
  const { colorNum, colors } = useSelector(colorsSelector);

  const paletteList = palette.map((item, ind) => {
    const classNames = [s.color];
    if (item) {
      classNames.push(s.active);
    }

    const onColorClick = (color: string) => {
      if (color) {
        dispatch(setColor(color));
      }
    };

    return (
      <li
        key={ind}
        className={classNames.join(' ')}
        onClick={() => onColorClick(item)}>
        <div style={{backgroundColor: item}}></div>
      </li>
    );
  });

  const colorsList = colors.map((item, ind) => {
    const classNames = [s.mainColor, cs.tool];

    if (ind === colorNum) {
      classNames.push(cs.activeTool);
    }

    const onMainColorClick = (number: number) => {
      dispatch(setColorNum(number));
    };

    return (
      <div
        className={classNames.join(' ')}
        key={ind}
        onClick={() => onMainColorClick(ind)}>
        <div className={s.colorWrapper}>
          <div style={{backgroundColor: colors[ind]}}></div>
        </div>
        <div className={s.colorText}>Цвет<br/>{ind + 1}</div>
      </div>
    );
  });

  return (
    <ToolsGroup title='Инструменты'>
      <div className={s.colors}>
        <div className={s.mainColors}>
          {colorsList}
        </div>
        <ul className={s.colorsList}>
          {paletteList}
        </ul>
      </div>
    </ToolsGroup>
  );
};
