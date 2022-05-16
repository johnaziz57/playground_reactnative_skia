/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Canvas, Circle, Group } from '@shopify/react-native-skia';
import React from 'react';
import { View } from 'react-native';

const App = () => {
  const width = 256;
  const height = 256;
  const r = 215;

  return (
    <View style={{
      width: "100%",
      height: "100%",
      backgroundColor: "gray"
    }}>
      <Canvas style={{ flex: 1 }}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={width - r} cy={r} r={r} color="magenta" />
          <Circle
            cx={width / 2}
            cy={height - r}
            r={r}
            color="yellow"
          />
        </Group>
      </Canvas>
    </View>
  );
};

export default App;
