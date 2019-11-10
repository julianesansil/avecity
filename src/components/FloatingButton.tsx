import React from 'react';
import { Icon } from 'native-base';
import styled from 'styled-components/native';
import ActionButton from 'react-native-action-button';

import { colors } from '~/src/styles/theme';

interface Props {
  onPress: () => void;
}

function FloatingButton({ onPress }: Props) {
  return (
    <ActionButton
      offsetY={15}
      offsetX={20}
      buttonColor={colors.PURPLE}
      onPress={onPress}
      renderIcon={() => <SCIcon name="md-add" />}
    />
  );
}

const SCIcon = styled(Icon)`
  color: ${colors.WHITE};
`;

export default FloatingButton;
