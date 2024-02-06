import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import ReusableCard from "components/cardContenu.jsx/Reusablecard";
import Header from "../../components/dashboardContenu/header";
import PageVisitsTable from "components/dashboardContenu/PageVisitsTable";
import GraphiqueCourbe from "components/dashboardContenu/GraphiqueCourbe";
import TeamMember from "components/dashboardContenu/TeamMember";
import Footer from "components/dashboardContenu/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <GraphiqueCourbe />
      <ReusableCard />
      <PageVisitsTable />
      <TeamMember />
      <Footer />
    </div>
  )
}

export default HomePage