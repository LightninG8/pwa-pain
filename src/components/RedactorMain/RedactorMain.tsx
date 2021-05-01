import { KonvaEventObject } from 'konva/types/Node';
import React, { useRef, useState } from 'react';
import s from './RedactorMain.module.css';

import { Stage, Layer, Rect, Line } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux';
import { activeToolSelector, colorsSelector, activeThicknessSelector } from 'selectors';

export const RedactorMain = () => {
  const { activeTool } = useSelector(activeToolSelector);
  const { colorNum, colors } = useSelector(colorsSelector);
  const { activeThickness } = useSelector(activeThicknessSelector);

  const [lines, setLines] = useState<any>([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    isDrawing.current = true;
    const pos: any = e.target.getStage()!.getPointerPosition();

    const newColor = activeTool === 'eraser' ? colors[colorNum === 0 ? 1 : 0] : colors[colorNum];
    const newThickness = activeTool === 'eraser' ? activeThickness * 2 : activeThickness;

    const newLine = {
      activeTool,
      points: [pos.x, pos.y],
      color: newColor,
      thickness: newThickness,
    };

    setLines([
      ...lines,
      newLine
    ]);
  };

  const handleMouseMove = (e : KonvaEventObject<MouseEvent | TouchEvent>) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage: any = e.target.getStage();
    const point = stage.getPointerPosition();
    const lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <main className={s.main}>
      <Stage
        width={window.innerWidth - 30}
        height={window.innerHeight - 30 - 110}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}>
        <Layer>
          <Rect
            x={0}
            y={0}
            width={window.innerWidth - 30}
            height={window.innerHeight - 30 - 110}
            fill="white"
          />
          {lines.map(({points, tool, color, thickness}: any, i: number): any => (
            <Line
              key={i}
              points={points}
              stroke={color}
              strokeWidth={thickness}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </main>
  );
};
