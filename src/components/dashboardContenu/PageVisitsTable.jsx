import React from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { FiGlobe } from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";

const pageVisits = [
  { id: 1, views: 4.525, returnValue: 255, bounceRate: 42.55, pageName: "/demo/admin/index.html" },
  { id: 2, views: 2.987, returnValue: 139, bounceRate: -43.52, pageName: "/demo/admin/forms.html" },
  { id: 3, views: 2.844, returnValue: 124, bounceRate: -32.35, pageName: "/demo/admin/util.html" },
  { id: 4, views: 1.220, returnValue: 55, bounceRate: 15.78, pageName: "/demo/admin/validation.html" },
  { id: 5, views: 505, returnValue: 3, bounceRate: -75.12, pageName: "/demo/admin/modals.html" }
];

const upcomingEvent = [
  {
    icon: <FiGlobe style={{ color: "secondary" }} className="me-3" />,
    title: "Global Rank",
    competitors: "#755",
  },
  {
    icon: <FaGlobeAmericas style={{ color: "secondary" }} className="me-3" />,
    title: "Country Rank",
    competitors: "#32",
    description: "United States",
  },
  {
    icon: <MdCategory style={{ color: "secondary" }} className="me-3" />,
    title: "Category Rank",
    competitors: "#16",
    description: "Travel > Accommodation",
  },
];

const PageVisitsTable = () => {
  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
    const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <td className="p-3">{pageName}</td>
        <td>{views}</td>
        <td>${returnValue}</td>
        <td className={bounceTxtColor}>
          <FontAwesomeIcon icon={bounceIcon} className="me-3" />
          {Math.abs(bounceRate)}%
        </td>
      </tr>
    );
  };

  return (
    <div className="mt-5 row">
      <div className="col-md-8 card">
        <div className="p-4 d-flex justify-content-between align-items-center">
          <h4>Page Visits</h4>
          <Button className="me-2" variant="info">
            See All
          </Button>
        </div>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Page Name</th>
              <th>Views</th>
              <th>Return Value</th>
              <th>Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            {pageVisits.map((visit) => (
              <TableRow key={visit.id} {...visit} />
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mb-4 col-md-4">
        {upcomingEvent.map((event, index) => (
          <Card key={index} className="mb-4 border-0">
            <Card.Body className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                {event.icon}
                <div className="ms-3">
                  <Card.Title>{event.title}</Card.Title>
                  {event.description && <p>{event.description}</p>}
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p className="me-2">{event.competitors}</p>
                <BsGraphUpArrow />
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PageVisitsTable;
