import React, { Fragment } from "react";
import { useState } from "react";
import { useTheme } from "../context/themeColorContext";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
function Dashboard() {
  const [region, setRegion] = useState("Americas");
  const [month, setMonth] = useState("2013-05-01");
  const [data, setData] = useState<any>(null);
  const { theme } = useTheme();

  const fetchDashboardData = async () => {
    const res = await fetch(`http://localhost:30001/api/dashboard-metrics?region=${region}&month=${month}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <><Fragment>
    <div className={`container-fluid py-5 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`} style={{ width: "90%" }}>
      <div className="text-center mb-5">
        <h1 className="display-4">📊 Welcome to Media Scope Analytics</h1>
        <p className="lead">Gain insights into the financial and public performance of leading companies.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Dashboard Panel</h5>
              <p className="card-text">
                Apply filters by region and month to explore key metrics including revenue, audit activity, advisory services, and customer satisfaction. View graphical breakdowns and detailed tables.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Compare Companies</h5>
              <p className="card-text">
                Filter and compare up to two companies by region or name. View their performance across taxation, audit, and advisory metrics through an interactive bar chart but must be sign In to gain access.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">AI Assistant</h5>
              <p className="card-text">
                Ask our AI helper to explain business metrics, summarise performance, or answer specific questions about the companies and their data. Includes predefined prompts for quick access but must be sign In to gain access.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <p>New here? <strong>Register</strong> to save your results and access more features.</p>
        <p>Already a user? <strong>Login</strong> to continue your analysis.</p>
      </div>
    </div>
      </Fragment>
      <div className={`container-fluid py-5 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`} style={{ width: "90%" }}>
        <h2 className="text-[#4DA6FF] text-xl font-bold mb-2">Dashboard Panel</h2>
  <div className="mb-2">
    <label className="mr-2">Region : </label>
    <select value={region} onChange={e => setRegion(e.target.value)} className="border p-1 rounded">
        <option value="Americas">USA</option>
        <option value="Europe">Europe</option>
        <option value="Asia Pac">Asia</option>
    </select>
  </div>
  <div className="mb-2">
    <label className="mr-2">Month : </label>
    <input type="month" value={month.slice(0, 7)} onChange={e => setMonth(e.target.value + "-01")} className="border p-1 rounded" />
  </div>
  <button
    className="bg-[#4DA6FF] hover:bg-[#3399FF] text-white px-4 py-2 rounded"
    onClick={fetchDashboardData}
  >
    Apply Filters
  </button>
    {data && (
    <p className="mt-3 text-sm text-gray-700">
      Showing data for: <strong>{region}</strong> — <strong>{new Date(month).toLocaleString('default', { month: 'long', year: 'numeric' })}</strong>
    </p>
  )}

              {data && (
                  <div className="flex flex-row gap-6">
                      <div className="w-1/2 space-y-6">
                          <div className="bg-white border border-[#DDE7F0] rounded shadow-sm p-4">
                              <h3 className="text-lg font-semibold mb-2">Discipline Metrics</h3>
                              <table className="table-auto w-full mb-4">
                                  <thead>
                                      <tr>
                                          <th className="border px-4 py-2">Discipline</th>
                                          <th className="border px-4 py-2">Revenue</th>
                                          <th className="border px-4 py-2">Percentage</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {data.discipline.map((d: any, i: number) => (
                                          <tr key={i}>
                                              <td className="border px-4 py-2">{d.Discipline}</td>
                                              <td className="border px-4 py-2">${d.Revenue.toLocaleString()}</td>
                                              <td className="border px-4 py-2">{d.Percentage}</td>
                                          </tr>
                                      ))}
                                  </tbody>
                              </table>

                              <h3 className="text-lg font-semibold mb-2">Revenue by Discipline</h3>
                              <ResponsiveContainer width="100%" height={250}>
                                  <BarChart data={data.discipline}>
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="Discipline" />
                                      <YAxis />
                                      <Tooltip />
                                      <Bar dataKey="Revenue" fill="#4DA6FF" />
                                  </BarChart>
                              </ResponsiveContainer>
                          </div>

                          <div className="bg-white border border-[#DDE7F0] rounded shadow-sm p-4">
                              <h3 className="text-lg font-semibold mb-2">Funnel</h3>
                              <table className="table-auto w-full mb-4">
                                  <thead>
                                      <tr>
                                          <th className="border px-4 py-2">Discipline</th>
                                          <th className="border px-4 py-2">Type</th>
                                          <th className="border px-4 py-2">Funnel-Values</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {["Audit", "Taxation", "Advisory"].map((discipline) => (
                                          <React.Fragment key={discipline}>
                                              <tr className="bg-gray-100 font-semibold">
                                                  <td className="border px-4 py-2" colSpan={3}>{discipline}</td>
                                              </tr>
                                              {["Leads", "Meetings", "Submissions", "Shortlist"].map((type) => (
                                                  <tr key={`${discipline}-${type}`}>
                                                      <td className="border px-4 py-2"></td>
                                                      <td className="border px-4 py-2">{type}</td>
                                                      <td className="border px-4 py-2">
                                                          {data.funnel?.[type]?.[discipline] ?? 0}
                                                      </td>
                                                  </tr>
                                              ))}
                                          </React.Fragment>
                                      ))}
                                  </tbody>
                              </table>
                              <h3 className="text-lg font-semibold mb-2">Audit Funnel Breakdown</h3>
                              <ResponsiveContainer width="100%" height={250}>
                                  <BarChart data={["Leads", "Meetings", "Submissions", "Shortlist"].map(type => ({
                                      type,
                                      value: data.funnel?.[type]?.Audit ?? 0
                                  }))}>
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="type" />
                                      <YAxis />
                                      <Tooltip />
                                      <Bar dataKey="value" fill="#82ca9d" />
                                  </BarChart>
                              </ResponsiveContainer>
                              <h3 className="text-lg font-semibold mb-2">Taxation Funnel Breakdown</h3>
                              <ResponsiveContainer width="100%" height={250}>
                                  <BarChart data={["Leads", "Meetings", "Submissions", "Shortlist"].map(type => ({
                                      type,
                                      value: data.funnel?.[type]?.Taxation ?? 0
                                  }))}>
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="type" />
                                      <YAxis />
                                      <Tooltip />
                                      <Bar dataKey="value" fill="pink" />
                                  </BarChart>
                              </ResponsiveContainer>
                              <h3 className="text-lg font-semibold mb-2">Advisory Funnel Breakdown</h3>
                              <ResponsiveContainer width="100%" height={250}>
                                  <BarChart data={["Leads", "Meetings", "Submissions", "Shortlist"].map(type => ({
                                      type,
                                      value: data.funnel?.[type]?.Advisory ?? 0
                                  }))}>
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="type" />
                                      <YAxis />
                                      <Tooltip />
                                      <Bar dataKey="value" fill="blue" />
                                  </BarChart>
                              </ResponsiveContainer>

                          </div>

                          <div className="bg-white border border-[#DDE7F0] rounded shadow-sm p-4">
                              <h3 className="text-lg font-semibold mb-2">Customer Satisfaction Levels</h3>
                              <table className="table-auto w-full">
                                  <thead>
                                      <tr>
                                          <th className="border px-4 py-2">Dept</th>
                                          <th className="border px-4 py-2">CY</th>
                                          <th className="border px-4 py-2">CY Var</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {data.satisfaction.map((s: any, i: number) => (
                                          <tr key={i}>
                                              <td className="border px-4 py-2">{s.Dept}</td>
                                              <td className="border px-4 py-2">{s.CY}</td>
                                              <td className="border px-4 py-2">{s.CY_Var}</td>
                                          </tr>
                                      ))}
                                  </tbody>
                              </table>
                              <h3 className="text-lg font-semibold mb-2">Customer Satisfaction Pie Chart</h3>
                              <ResponsiveContainer width="100%" height={250}>
                                  <PieChart>
                                      <Pie
                                          data={data.satisfaction.map((s: any) => ({
                                              name: s.Dept,
                                              value: parseFloat(s.CY),
                                          }))}
                                          dataKey="value"
                                          nameKey="name"
                                          cx="50%"
                                          cy="50%"
                                          outerRadius={80}
                                          label
                                      >
                                          {data.satisfaction.map((_: any, index: number) => (
                                              <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]} />
                                          ))}
                                      </Pie>
                                      <Tooltip />
                                  </PieChart>
                              </ResponsiveContainer>
                          </div>
                      </div>




                  </div>
              )}
          </div></>
  );
}

export default Dashboard;
