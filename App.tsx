/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Canvas, center, Circle, Group, Oval, Paint, Rect, SkRect, SweepGradient, usePaintRef, Vector } from '@shopify/react-native-skia';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';

const App = () => {
  const { width, height } = useWindowDimensions()
  const center: Vector = { x: width / 2, y: height / 2 }
  const ovalRect: SkRect = {
    height: 150,
    width: width - 32,
    x: 16,
    y: (height / 2) - 75
  }

  const paint = usePaintRef()

  return (

    <Canvas style={{ flex: 1 }}>
      <Circle c={{ x: width / 2, y: height / 2 }} r={25} color="lightblue" />
      <Paint ref={paint} style="stroke" strokeWidth={18}>
        <SweepGradient c={center} colors={["red","blue","red"]}/>
      </Paint>

      <Group paint={paint}>
        <Oval rect={ovalRect} />
        <Group transform={[{ rotate: Math.PI / 3 }]} origin={center}>
          <Oval rect={ovalRect} />
        </Group>
        <Group transform={[{ rotate: - (Math.PI / 3) }]} origin={center}>
          <Oval rect={ovalRect} />
        </Group>
      </Group>
    </Canvas>
  );
};

export default App;
