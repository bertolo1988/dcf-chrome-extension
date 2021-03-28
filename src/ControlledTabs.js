import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

import DcfFormPage from "./pages/DcfFormPage";
import AboutPage from "./pages/AboutPage";
import NewWindowPage from "./pages/NewWindowPage";
import DcfHistoryPage from "./pages/DcfHistoryPage";

function ControlledTabs() {
  const [key, setKey] = useState("form");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      justify
      variant="tabs"
    >
      <Tab eventKey="form" title="Form">
        <DcfFormPage />
      </Tab>
      <Tab eventKey="history" title="History">
        <DcfHistoryPage />
      </Tab>
      <Tab eventKey="newPanel" title="New window">
        <NewWindowPage />
      </Tab>
      <Tab eventKey="about" title="About">
        <AboutPage />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;
