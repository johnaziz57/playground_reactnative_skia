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

const ReactLogo = () => {
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

        <Canvas style={{ flex: 1 }}>
            <Paint ref={circlePaint}>
                <RadialGradient c={center} r={50} colors={[c1, c2]} />
            </Paint>

            <Circle paint={circlePaint} c={{ x: width / 2, y: height / 2 }} r={25} color="lightblue" />
            <Paint ref={ovalPaint} style="stroke" strokeWidth={18}>
                <SweepGradient c={center} colors={[c2, c1, c2]} />
                <BlurMask blur={20} style="inner" />
            </Paint>
            <Group paint={ovalPaint}>
                <Oval rect={ovalRect} />
                <Group transform={[{ rotate: Math.PI / 3 }, { scale: -1 }]} origin={center}>
                    <Oval rect={ovalRect} />
                </Group>
                <Group transform={[{ rotate: - (Math.PI / 3) }, { scale: -1 }]} origin={center}>
                    <Oval rect={ovalRect} />
                </Group>
            </Group>
        </Canvas>
    );
};

export default ReactLogo;
