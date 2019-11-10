import React from 'react';
import { Platform, StyleSheet } from 'react-native';
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
      style={styles.animatedHeader}
      titleStyle={styles.title}
      backTextStyle={styles.backText}
      backStyle={styles.back}
      headerMaxHeight={Platform.select({ ios: 200, android: 150 })}
      toolbarColor={colors.PURPLE}
      title={title}
      imageSource={bgImage}
      disabled={false}>
      {children}
    </AnimatedHeader>
  );
}

const styles = StyleSheet.create({
  animatedHeader: {
    flex: 1,
  },

  title: {
    fontSize: Platform.select({ ios: 28, android: 26 }),
    left: 26,
    bottom: 20,
    color: colors.WHITE,
  },

  backText: {
    fontSize: 20,
    color: colors.BLACK,
  },

  back: {
    marginLeft: 20,
  },
});

export default AnimatedHomeHeader;
