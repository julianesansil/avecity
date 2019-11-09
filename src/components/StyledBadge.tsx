import styled from 'styled-components/native';

import { colors } from '~/src/styles/theme';

const StyledBadge = styled.View`
  height: 36;
  width: 36;
  border-radius: 18;
  background-color: ${colors.ORANGE};
  justify-content: center;
`;

export default StyledBadge;
