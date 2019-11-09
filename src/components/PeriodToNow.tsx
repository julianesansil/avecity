import React from 'react';
import { Text } from 'react-native';
import Moment from 'react-moment';
import moment from 'moment';

import { StyledTimeText } from './StyledText';

interface Props {
  date: moment.Moment;
}

function PeriodToNow({ date }: Props) {
  return (
    <StyledTimeText>
      <Moment element={Text} fromNow>
        {date.toString()}
      </Moment>
    </StyledTimeText>
  );
}

export default PeriodToNow;
