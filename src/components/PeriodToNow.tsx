import React from 'react';
import { Text } from 'react-native';
import Moment from 'react-moment';
import moment from 'moment';

interface Props {
  date: moment.Moment;
}

function PeriodToNow({ date }: Props) {
  return (
    <Moment element={Text} fromNow>
      {date.toString()}
    </Moment>
  );
}

export default PeriodToNow;
