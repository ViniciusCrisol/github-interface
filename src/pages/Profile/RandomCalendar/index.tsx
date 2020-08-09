import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns';

import { Container } from './styles';

type HeatMapValue = { date: Date; count: number };

const generateHeatMapValues = (startDate: Date, endDate: Date) => {
  const values: Date[] = [];

  let currentDate = startDate;

  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    values.push(currentDate);

    currentDate = addDays(currentDate, 1);
  }

  return values;
};

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className='wrapper'>
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatMapValues(startDate, endDate)}
          showOutOfRangeDays
          gutterSize={3}
          classForValue={(item: HeatMapValue) => {
            const count = Math.random() * 4;

            return `scale-${Math.round(count)}`;
          }}
        />

        <span>Random caldendar (do not represent actual data)</span>
      </div>
    </Container>
  );
};

export default RandomCalendar;
