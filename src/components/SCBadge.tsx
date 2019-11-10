import styled from 'styled-components/native';

import { colors } from '~/src/styles/theme';

const SCBadge = styled.View`
  justify-content: center;
  height: 36;
  width: 36;

  border-radius: 18;
  background-color: ${colors.ORANGE};
`;

export default SCBadge;
