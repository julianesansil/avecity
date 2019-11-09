import React from 'react';
import { Icon } from 'native-base';
import ActionButton from 'react-native-action-button';

import { colors } from '~/src/styles/theme';

interface Props {
  onPress: () => void;
}

function FloatingButton({ onPress }: Props) {
  return (
    <ActionButton
      buttonColor={colors.PURPLE}
      offsetY={15}
      offsetX={20}
      onPress={onPress}
      renderIcon={() => <Icon name="md-add" style={{ color: colors.WHITE }} />}
    />
  );
}

export default FloatingButton;
