import React from 'react';
import { Platform } from 'react-native';
import AnimatedHeader from 'react-native-animated-header';

import { colors } from '~/src/styles/theme';
import bgImage from '~/resources/images/bg.png';

interface Props {
  children: JSX.Element;
  title: string;
}

function AnimatedHomeHeader({ children, title }: Props) {
  return (
    <AnimatedHeader
      style={{ flex: 1 }}
      title={title}
      titleStyle={{
        fontSize: Platform.select({ ios: 28, android: 26 }),
        left: 26,
        bottom: 20,
        color: colors.WHITE,
      }}
      backStyle={{ marginLeft: 20 }}
      backTextStyle={{ fontSize: 20, color: colors.BLACK }}
      headerMaxHeight={Platform.select({ ios: 200, android: 150 })}
      imageSource={bgImage}
      toolbarColor={colors.PURPLE}
      disabled={false}>
      {children}
    </AnimatedHeader>
  );
}

export default AnimatedHomeHeader;
