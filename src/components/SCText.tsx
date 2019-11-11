import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { fonts, colors } from '~/src/styles/theme';
import { Input } from 'native-base';

const SCText = styled.Text`
  font-family: ${fonts.MEDIUM};
  font-size: ${Platform.select({ ios: 15, android: 13.5 })};
  color: ${colors.LIGHT_GRAY};
`;

export const SCTitle = styled.Text`
  font-family: ${fonts.SEMIBOLD};
  font-size: ${Platform.select({ ios: 17, android: 16 })};
  color: ${colors.DARK_GRAY};
`;

export const SCOrangeTitle = styled.Text`
  font-family: ${fonts.BOLD};
  font-size: ${Platform.select({ ios: 16, android: 15 })};
  color: ${colors.ORANGE};
`;

export const SCInputText = styled(Input)`
  font-family: ${fonts.MEDIUM};
  font-size: 15;
  color: ${colors.DARK_GRAY};

  border-bottom-width: 1;
  border-color: ${colors.LIGHT_GRAY};
`;

export const StyledLinkButtonText = styled.Text`
  font-family: ${fonts.MEDIUM};
  font-size: ${Platform.select({ ios: 14, android: 13 })};
  color: ${colors.DARK_GRAY};
`;

export const StyledBadgeText = styled.Text`
  font-family: ${fonts.EXTRABOLD};
  font-size: 14;
  color: ${colors.WHITE};
  text-align: center;
`;

export const StyledDetailText = styled.Text`
  font-family: ${fonts.REGULAR};
  font-size: ${Platform.select({ ios: 14, android: 12 })};
  color: ${colors.LIGHT_GRAY};
`;

export const StyledWarningText = styled.Text`
  font-family: ${fonts.SEMIBOLD};
  font-size: ${Platform.select({ ios: 20, android: 18 })};
  color: ${colors.ORANGE};
`;

export default SCText;
