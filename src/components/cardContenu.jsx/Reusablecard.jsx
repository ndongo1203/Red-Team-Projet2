import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import { BsFillPersonFill } from "react-icons/bs";
import { FaUsers, FaDollarSign, FaShareAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobile, faTablet } from "@fortawesome/free-solid-svg-icons";

function ReusableCard() {
  const cardData = [
    {
      icon: <FaUsers style={{ color: "scondary", fontSize: "4em" }} />,
      title: "Customers",
      text1: "345k",
      text2: "Feb 1 - Apr 1, worldWide",
      text3: "18.2% Since last month",
    },
    {
      icon: <FaDollarSign style={{ color: "scondary", fontSize: "4em" }} />,
      title: "Revenue",
      text1: "$43,594",
      text2: "Feb 1 - Apr 1,  WorldWide",
      text3: "28.4% Since last month",
    },
    {
      icon: <FaShareAlt style={{ color: "scondary", fontSize: "4em" }} />,
      title: "Traffic Share",
      items: [
        { title: "Desktop", text: "60%", icon: <FontAwesomeIcon icon={faDesktop} /> },
        { title: "Mobile", text: "30%", icon: <FontAwesomeIcon icon={faMobile} /> },
        { title: "Tablet", text: "10%", icon: <FontAwesomeIcon icon={faTablet} /> },
      ],
    },
  ];

  return (
    <div className="mt-4">
      <Row xs={1} md={3} className="g-4">
        {cardData.map((data, idx) => (
          <Col key={idx}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Text>{data.icon}</Card.Text>
                <div>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.text1}</Card.Text>
                  <Card.Text>{data.text2}</Card.Text>
                  <Card.Text>{data.text3}</Card.Text>
                  {data.items && (
                    <div>
                      {data.items.map((item, index) => (
                        <div key={index} className="d-flex align-items-center p-1">
                          <span className="me-2">{item.icon}</span>
                          <span>{item.title}</span>
                          <span className="ms-2">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ReusableCard;
