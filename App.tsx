/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Canvas, center, Circle, Group, Oval, Rect, SkRect, Vector } from '@shopify/react-native-skia';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';

const App = () => {
  const { width, height } = useWindowDimensions()
  const center: Vector = { x: width / 2, y: height / 2 }
  const rct: SkRect = {
    height: 150,
    width: width - 32,
    x: 16,
    y: (height / 2) - 75
  }
  return (

    <Canvas style={{ flex: 1 }}>
      <Circle c={{ x: width / 2, y: height / 2 }} r={25} color="lightblue" />
      <Group color="lightblue" style="stroke" strokeWidth={18}>
        <Oval rect={rct} />
        <Group transform={[{ rotate: Math.PI / 3 }]} origin={center}>
          <Oval rect={rct} />
        </Group>
        <Group transform={[{ rotate: - (Math.PI / 3) }]} origin={center}>
          <Oval rect={rct} />
        </Group>
      </Group>
    </Canvas>
  );
};

export default App;
