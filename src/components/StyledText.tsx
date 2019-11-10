import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { fonts, colors } from '~/src/styles/theme';

const StyledText = styled.Text`
  font-family: ${fonts.MEDIUM};
  font-size: ${Platform.select({ ios: 15, android: 13 })};
  color: ${colors.LIGHT_GRAY};
`;

export const StyledTitle = styled.Text`
  font-family: ${fonts.SEMIBOLD};
  font-size: ${Platform.select({ ios: 17, android: 16 })};
  color: ${colors.DARK_GRAY};
`;

export const StyledSubtitle = styled.Text`
  font-family: ${fonts.MEDIUM};
  font-size: ${Platform.select({ ios: 15, android: 14 })};
  color: ${colors.LIGHT_GRAY};

  margin-top: 4;
`;

export const StyledSectionTitle = styled.Text`
  font-family: ${fonts.BOLD};
  font-size: ${Platform.select({ ios: 16, android: 15 })};
  color: ${colors.ORANGE};

  margin-top: 20;
  margin-bottom: 5;
  padding-vertical: 5;

  background-color: ${colors.WHITE};
  text-align: center;
  border-width: 0.3;
  border-color: ${colors.ORANGE};
`;

export const StyledButtonText = styled.Text`
  font-family: ${fonts.MEDIUM};
  font-size: ${Platform.select({ ios: 14, android: 13 })};
  color: ${colors.DARK_GRAY};
`;

export const StyledTimeText = styled.Text`
  font-family: ${fonts.REGULAR};
  font-size: ${Platform.select({ ios: 14, android: 12 })};
  color: ${colors.LIGHT_GRAY};
`;

export const StyledBadgeText = styled.Text`
  font-family: ${fonts.EXTRABOLD};
  font-size: 14;
  color: ${colors.WHITE};

  text-align: center;
`;

export const StyledCenteredText = styled.Text`
  font-family: ${fonts.BOLD};
  font-size: 20;
  color: ${colors.ORANGE};

  text-align: center;
`;

export default StyledText;
