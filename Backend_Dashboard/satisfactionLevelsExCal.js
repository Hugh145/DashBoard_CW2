const CompanyTimeTableData = require('./models/CompanyTimeTableData');

async function calculateSatisfactionTable() {
  const data = await CompanyTimeTableData.find();

  const grouped = {};

  for (const row of data) {
    const year = new Date(row.month).getFullYear();
    const key = `${row.region}-${row.discipline}`;
    
    if (!grouped[key]) {
      grouped[key] = { region: row.region, discipline: row.discipline, PY: [], CY: [] };
    }

    if (year === 2012) {
      grouped[key].PY.push(row.pnl * 100); // Convert to percentage
    } else if (year === 2013) {
      grouped[key].CY.push(row.pnl * 100); // Convert to percentage
    }
  }

  const output = [];

  for (const group of Object.values(grouped)) {
    const pyAvg = group.PY.length ? (group.PY.reduce((a, b) => a + b) / group.PY.length) : null;
    const cyAvg = group.CY.length ? (group.CY.reduce((a, b) => a + b) / group.CY.length) : null;

    if (pyAvg && cyAvg) {
      output.push({
        Measure: 'Satisfaction',
        Dept: group.discipline,
        Region: group.region,
        PY: `${pyAvg.toFixed(1)}%`,
        PY_Var: `${(100 - pyAvg).toFixed(1)}%`,
        CY: `${cyAvg.toFixed(1)}%`,
        CY_Var: `${(100 - cyAvg).toFixed(1)}%`
      });
    }
  }

  return output;
}
