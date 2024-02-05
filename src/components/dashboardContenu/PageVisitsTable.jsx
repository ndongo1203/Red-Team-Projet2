import React from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const pageVisits = [
    { id: 1, views: 4.525, returnValue: 255, bounceRate: 42.55, pageName: "/demo/admin/index.html" },
    { id: 2, views: 2.987, returnValue: 139, bounceRate: -43.52, pageName: "/demo/admin/forms.html" },
    { id: 3, views: 2.844, returnValue: 124, bounceRate: -32.35, pageName: "/demo/admin/util.html" },
    { id: 4, views: 1.220, returnValue: 55, bounceRate: 15.78, pageName: "/demo/admin/validation.html" },
    { id: 5, views: 505, returnValue: 3, bounceRate: -75.12, pageName: "/demo/admin/modals.html" }
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
        <div className="mt-5">
            <div className="col-md-8 card">
            <div className="p-4 d-flex justify-content-between align-items-center">
                <h4>Page Visits</h4>
                <Button className="me-2" variant="info">See All</Button>{ "" }
            </div>
                <Table striped bordered hover>
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
        </div>
    );
};

export default PageVisitsTable;
