import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "@themesberg/react-bootstrap";

function Header() {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} size="sm" className="me-2" style={{
            color: "#fff",
            background: "#262b40",
            // borderCcolor: "#262b40",
            boxShadow: "inset 0 1px 0 hsla(0,0%,100%,.15), 0 1px 1px rgba(46,54,80,.075)",
          }}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview Security
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Upgrade to Pro
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup>
          <Button variant="transparent" size="sm" style={{ color: "#262b40", borderColor: "#262b40", }}>Share</Button>
          <Button variant="transparent" size="sm" style={{ color: "#262b40", borderColor: "#262b40", }}>Export</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Header;
