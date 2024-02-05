import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { Form, InputGroup, Navbar, Container, Nav, Dropdown, ListGroup, Image } from "@themesberg/react-bootstrap";

const Notification = (props) => {
  const { link, sender, image, time, message, read = false } = props;
  const readClassName = read ? "" : "text-danger";

  return (
    <ListGroup.Item action href={link} className="border-bottom border-light">
      <div className="d-flex align-items-center">
        <Image src={image} className="user-avatar lg-avatar rounded-circle" />
        <div className="ms-2">
          <h4 className="h6 mb-0 text-small">{sender}</h4>
          <p className={`font-small mt-1 mb-0 ${readClassName}`}>{message}</p>
          <small className={readClassName}>{time}</small>
        </div>
      </div>
    </ListGroup.Item>
  );
};

function ContenuNav() {
  const [notifications, setNotifications] = useState([
    { id: 1, link: "#", sender: "John Doe", image: "profile1.jpg", time: "2h ago", message: "New message received" },
    // Ajoutez d'autres notifications selon votre besoin
  ]);

  const markNotificationsAsRead = () => {
    // Mettez à jour l'état pour marquer toutes les notifications comme lues
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  return (
    <div>
      <Navbar variant="dark" expanded className="ps-0 pe-2">
        <Container fluid className="">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center">
              <Form className="navbar-search">
                <Form.Group id="topbarSearch">
                  <InputGroup className="input-group-merge search-bar">
                    <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    <Form.Control type="text" placeholder="Search" />
                  </InputGroup>
                </Form.Group>
              </Form>
            </div>
            <Nav className="align-items-center" style={{ position: "relative", left: "110vh", }}>
              <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead}>
                <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications me-lg-3">
                  <span className="icon icon-sm">
                    <FontAwesomeIcon icon={faBell} className="bell-shake" />
                    {notifications.some((n) => !n.read) && <span className="icon-badge rounded-circle unread-notifications" />}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                  <ListGroup className="list-group-flush">
                    <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                      Notifications
                    </Nav.Link>

                    {notifications.map((n) => <Notification key={`notification-${n.id}`} {...n} />)}

                    <Dropdown.Item className="text-center text-primary fw-bold py-3">
                      View all
                    </Dropdown.Item>
                  </ListGroup>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as={Nav.Item}>
              <p className='this-profile mt-3'>
              <img style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                objectFit: "cover",
              }} src="/profile.png" alt="Profile" className="profile-image img-fluid" />
              </p>
              </Dropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default ContenuNav;
