import styled from 'styled-components/native';

const SCContainer = styled.View`
  flex: 1;
`;

export const SCSafeContainer = styled.SafeAreaView`
  flex: 1;
`;

export const SCCentralizedContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  ${(props: { marginTop?: boolean; marginBottom?: boolean }) =>
    (props.marginTop && `margin-top: 100;`) ||
    (props.marginBottom && `margin-bottom: 50;`)}
`;
export default SCContainer;
