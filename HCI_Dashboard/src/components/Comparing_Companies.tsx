import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

type Company = {
  _id: string;
  name: string;
  region: string;
  rank: number;
  taxation: number;
  audit: number;
  advisory: number;
};

function Companies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filtered, setFiltered] = useState<Company[]>([]);
  const [filters, setFilters] = useState({ name: "", region: "" });
  const [compareList, setCompareList] = useState<Company[]>([]);

  const token = localStorage.getItem("token");
console.log("🔐 Token sent:", token);
  useEffect(() => {
    axios.get("http://localhost:30001/api/companies", {  
        headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setCompanies(res.data);
        setFiltered(res.data);
      });
  }, []);

  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);

    const result = companies.filter(
      (company) =>
        company.name.toLowerCase().includes(newFilters.name.toLowerCase()) &&
        company.region.toLowerCase().includes(newFilters.region.toLowerCase())
    );
    setFiltered(result);
  };

  const toggleCompare = (company: Company) => {
    const alreadySelected = compareList.find((c) => c._id === company._id);
    if (alreadySelected) {
      setCompareList(compareList.filter((c) => c._id !== company._id));
    } else if (compareList.length < 2) {
      setCompareList([...compareList, company]);
    }
  };

  return (
    <div>
      <h2>Compare Companies Page</h2>
      <Row className="mb-3">
        <Col><Form.Control placeholder="Filter by Name" name="name" onChange={handleFilterChange} /></Col>
        <Col><Form.Control placeholder="Filter by Region" name="region" onChange={handleFilterChange} /></Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Region</th>
            <th>Rank</th>
            <th>Taxation</th>
            <th>Audit</th>
            <th>Advisory</th>
            <th>Compare</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((company) => (
            <tr key={company._id}>
              <td>{company.name}</td>
              <td>{company.region}</td>
              <td>{company.rank}</td>
              <td>{company.taxation?.toFixed(2)}</td>
              <td>{company.audit?.toFixed(2)}</td>
              <td>{company.advisory?.toFixed(2)}</td>
              <td>
                <Button
                  variant={
                    compareList.find((c) => c._id === company._id)
                      ? "danger"
                      : "primary"
                  }
                  onClick={() => toggleCompare(company)}
                  disabled={
                    !compareList.find((c) => c._id === company._id) &&
                    compareList.length === 2
                  }
                >
                  {compareList.find((c) => c._id === company._id)
                    ? "Remove"
                    : "Compare"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {compareList.length === 2 && (
        <div>
          <h3>Comparison Chart</h3>
          <Bar
            data={{
              labels: ["Taxation", "Audit", "Advisory"],
              datasets: compareList.map((company) => ({
                label: company.name,
                data: [company.taxation, company.audit, company.advisory],
              })),
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Companies;
