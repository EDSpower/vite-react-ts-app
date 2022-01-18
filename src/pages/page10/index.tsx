/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-11-19 15:46:00
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2022-01-18 13:50:43
 */
import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import './index.scss';

const page10: React.FC = () => {
  console.log('page10: ');

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      backgroundColor: '#eee',
      isDrawingMode: false, // 设置是否可以绘制
      selection: false,
    });

    const circle = new fabric.Circle({
      // 绘制圆形
      radius: 100,
      fill: '#f00',
      scaleY: 0.5,
      originX: 'center', // 调整中心点的X轴坐标
      originY: 'center', // 调整中心点的Y轴坐标
    });

    const text = new fabric.Text('Hello World', {
      // 绘制文本
      fontSize: 30,
      originX: 'center',
      originY: 'center',
    });

    // 进行组合
    const group = new fabric.Group([circle, text], {
      left: 150,
      top: 100,
      angle: 10,
    });

    canvas.add(group);
    const svgVal = canvas.toSVG();
    console.log('svgVal: ', svgVal);
  }, []);

  return (
    <div className="page10">
      <canvas id="canvas" width="404px" height="587px" />
    </div>
  );
};

export default page10;
