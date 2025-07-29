const data = require('./path-to-CompanyTimeTableData'); // Replace with actual import

// Constants
const MIN_ANGLE = 30;
const MAX_ANGLE = 240;
const VALUE_RANGE = 140; // max - min
const ANGLE_RANGE = MAX_ANGLE - MIN_ANGLE;

// Filter May 2013 data for Americas
const targetMonth = '2013-05-01';
const region = 'Americas';

const result = data
  .filter(entry => entry.region === region && entry.month === targetMonth)
  .map(entry => {
    const score = entry.pnl * 100; // Score from pnl
    const value = entry.map;       // Speed (map)
    const angle = ((value / VALUE_RANGE) * ANGLE_RANGE) + MIN_ANGLE;

    return {
      Discipline: entry.discipline,
      Speed: value,
      Score: `${score.toFixed(0)}%`,
      CalculatedAngle: angle.toFixed(0),
      NeedleLength: 3.3,
    };
  });

console.table(result);
