const CompanyTimeTableData = require('../models/CompanyTimeTableData');
const Prospect = require('../models/Prospect');

// helper to format % and ensure safe divide
const percent = (num) => `${(num * 100).toFixed(1)}%`;

exports.getDashboardMetrics = async (req, res) => {
  const { region, month } = req.query;

  try {
    // === Discipline Section ===
    const disciplineData = await CompanyTimeTableData.find({ region, month });

    const disciplineResult = disciplineData.map(row => ({
      Discipline: row.discipline,
      Revenue: row.revenue,
      Percentage: percent(row.pnl)
    }));

    // === Funnel Section ===
    const funnelTypes = ["Leads", "Meetings", "Submissions", "Shortlist"];
    const funnelEntries = await Prospect.find({ Region: region, type: { $in: funnelTypes } });

    const funnelResult = {};
    funnelTypes.forEach(type => {
    funnelResult[type] = {}; 
    funnelEntries
    .filter(e => e.type === type)
    .forEach(entry => {
      funnelResult[type][entry.division] = entry.data;
    });
});

    // === Satisfaction Section ===

    const satisfactionData = await CompanyTimeTableData.find({ region });

    const groupByDiscipline = {};
    satisfactionData.forEach(row => {
      const year = new Date(row.month).getFullYear();
      const key = row.discipline;

      if (!groupByDiscipline[key]) groupByDiscipline[key] = { PY: [], CY: [] };
      if (year === 2013) groupByDiscipline[key].CY.push(row.pnl * 100);
    });

    const satisfactionResult = Object.entries(groupByDiscipline).map(([discipline, { PY, CY }]) => {
      const pyAvg = PY.length ? PY.reduce((a, b) => a + b) / PY.length : null;
      const cyAvg = CY.length ? CY.reduce((a, b) => a + b) / CY.length : null;

      return {
        Dept: discipline,
        Region: region,
        PY: pyAvg ? `${pyAvg.toFixed(1)}%` : "N/A",
        PY_Var: pyAvg ? `${(100 - pyAvg).toFixed(1)}%` : "N/A",
        CY: cyAvg ? `${cyAvg.toFixed(1)}%` : "N/A",
        CY_Var: cyAvg ? `${(100 - cyAvg).toFixed(1)}%` : "N/A"
      };
    });

    res.json({
      discipline: disciplineResult,
      funnel: funnelResult,
      satisfaction: satisfactionResult
    });

  } catch (error) {
    console.error("Error generating dashboard metrics:", error);
    res.status(500).json({ error: "Failed to generate dashboard metrics" });
  }
};
