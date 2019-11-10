import React from 'react';
import { Icon } from 'native-base';
import styled from 'styled-components/native';

import SCText from '~/src/components/SCText';

import { colors } from '~/src/styles/theme';

interface Props {
  first?: boolean;
  padding?: boolean;
  nameIcon: string;
  infoText: string;
}

function LocationInfoItem({ first, padding, nameIcon, infoText }: Props) {
  return (
    <SCContainer first={first}>
      <SCIcon padding={padding} name={nameIcon} />
      <SCInfoText>{infoText}</SCInfoText>
    </SCContainer>
  );
}

const SCContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;

  margin-top: ${(props: { first?: boolean }) => (props.first ? 14 : 8)};
`;

const SCIcon = styled(Icon)`
  font-size: 15;
  color: ${colors.PURPLE};

  margin-top: ${(props: { padding?: boolean }) => (props.padding ? 1 : 0)};
`;

const SCInfoText = styled(SCText)`
  margin-left: 10;
`;

export default LocationInfoItem;
