import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

import { StyledDetailText } from './SCText';

interface Props {
  date: moment.Moment;
}

function PeriodToNow({ date }: Props) {
  return (
    <Moment element={StyledDetailText} fromNow>
      {date.toString()}
    </Moment>
  );
}

export default PeriodToNow;
