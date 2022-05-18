/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { BlurMask, Canvas, Circle, Color, Group, Oval, Paint, RadialGradient, SkRect, SweepGradient, usePaintRef, Vector } from '@shopify/react-native-skia';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import ReactLogo from './drawings/ReactLogo';
import SVG from './drawings/SVG';

const App = () => {
  const { width, height } = useWindowDimensions()
  const center: Vector = { x: width / 2, y: height / 2 }
  const c1: Color = "lightblue"
  const c2 = "#4A759B";

  const ovalRect: SkRect = {
    height: 150,
    width: width - 32,
    x: 16,
    y: (height / 2) - 75
  }
  const ovalPaint = usePaintRef()

  const circlePaint = usePaintRef()

  return (
    <SVG/>
  );
};

export default App;
