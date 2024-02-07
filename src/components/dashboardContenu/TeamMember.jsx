import React from "react"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import profile1 from "../../assets/images/profile-picture-1.jpg"
import profile2 from "../../assets/images/profile-picture-2.jpg"
import profile3 from "../../assets/images/profile-picture-3.jpg"
import profile4 from "../../assets/images/profile-picture-4.jpg"
import { BsBootstrapFill } from "react-icons/bs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { RiPixelfedFill } from "react-icons/ri";
import { BsVimeo } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { MdOutlineInsertInvitation } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { BsGraphDown } from "react-icons/bs";

function TeamMember() {
  return (
    <div className="row mt-4">
      <div className="col-md-4 mb-4">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <h4>Team members</h4>
            <Button variant="info">See all</Button>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p className='this-profile'>
                  <img style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    objectFit: "cover",
                  }} src={profile2} alt="Profile" className="profile-image img-fluid me-4" />
                </p>
                <div className="">
                  <Card.Title>Christopher Woo</Card.Title>
                  <Card.Text>● Online</Card.Text>
                </div>
              </div>
              <Button variant="success" size="sm" style={{ height: "34px", width: "30%" }}><MdOutlineInsertInvitation /> Invite</Button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex">
                <p className='this-profile'>
                  <img style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    objectFit: "cover",
                  }} src={profile1} alt="Profile" className="profile-image img-fluid me-4" />
                </p>
                <div className="">
                  <Card.Title>Jose Leos</Card.Title>
                  <Card.Text>● In a meeting</Card.Text>
                </div>
              </div>
              <Button variant="success" size="sm" style={{ height: "34px", width: "35%" }}><FiMessageCircle /> Message</Button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex">
                <p className='this-profile'>
                  <img style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    objectFit: "cover",
                  }} src={profile3} alt="Profile" className="profile-image img-fluid me-4" />
                </p>
                <div className="">
                  <Card.Title>Bonnie Green</Card.Title>
                  <Card.Text>● Offline</Card.Text>
                </div>
              </div>
              <Button variant="success" size="sm" style={{ height: "34px", width: "30%" }}><MdOutlineInsertInvitation /> Invite</Button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex">
                <p className='this-profile'>
                  <img style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    objectFit: "cover",
                  }} src={profile4} alt="Profile" className="profile-image img-fluid me-4" />
                </p>
                <div className="">
                  <Card.Title>Bonnie Green</Card.Title>
                  <Card.Text>● Offline</Card.Text>
                </div>
              </div>
              <Button variant="success" size="sm" style={{ height: "34px", width: "35%" }}><FiMessageCircle /> Message</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4 mb-4">
        <Card>
          <Card.Header>Progress track</Card.Header>
          <Card.Body>
            <div className="d-flex align-items-center">
              <div className="">
                <BsBootstrapFill className="fs-2 mt-2" style={{ color: "purple" }} />
              </div>
              <Card.Text className="mx-4">
                <p>Rocket - SaaS Template <span>38%</span></p>
                <ProgressBar now={38} style={{ height: "8px" }} />
              </Card.Text>
            </div>
            <div className="d-flex align-items-center mt-1">
              <div className="">
                <RiPixelfedFill className="fs-1 mt-2" style={{ color: "red" }} />
              </div>
              <Card.Text className="mx-4">
                <p>Pixel - Design System <span>60%</span></p>
                <ProgressBar now={60} style={{ height: "8px" }} />
              </Card.Text>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="">
                <BsVimeo className="fs-2 mt-1 text-success" style={{ color: "purple" }} />
              </div>
              <Card.Text className="mx-4">
                <p>Spaces - Listings Template <span>45%</span></p>
                <ProgressBar now={45} style={{ height: "8px" }} />
              </Card.Text>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="">
                <FaReact className="fs-2 mt-1" style={{ color: "purple" }} />
              </div>
              <Card.Text className="mx-4">
                <p>Stellar - Dashboard <span>35%</span></p>
                <ProgressBar now={35} style={{ height: "8px" }} />
              </Card.Text>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="">
                <BsBootstrapFill className="fs-2 mt-1" style={{ color: "purple" }} />
              </div>
              <Card.Text className="mx-4">
                <p>Rocket - SaaS Template <span>38%</span></p>
                <ProgressBar now={38} style={{ height: "8px" }} />
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4 mb-4">
        <Card>
          <Card.Body className="p-5">
            <Card.Title>Acquisition</Card.Title>
            <Card.Text>
            Tells you where your visitors originated from, such as search engines, social networks or website referrals.
            </Card.Text>
            <div className="d-flex">
              <div className="mt-2">
              <BsGraphDown className="fs-2" />
              </div>
              <div className="mx-3">
                  <p>Bounce Rate <br /><span className="fw-bolde fs-5">33.50%</span></p>
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="mt-2">
              <BsGraphDown className="fs-2" />
              </div>
              <div className="mx-3">
                  <p>Sessions <br /><span className="fw-bolde fs-5">9,567</span></p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default TeamMember
