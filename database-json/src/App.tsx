import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { ThemeProvider } from "styled-components";
import RunQuery from "./Components/Pages/RunQuery";
import SeeTables from "./Components/Pages/SeeTables";
import { SqlProvider } from "./context/SqlContext";
import SideBar from "./Components/Organisms/SideBar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("Toggling sidebar");
    setIsSidebarOpen(!isSidebarOpen);
  };

  const ContentContainer = styled.div`
    margin-left: ${isSidebarOpen ? "250px" : "0"};
    transition: margin-left 0.3s;
  `;

  return (
    <Router>
      <div className="App">
        <SqlProvider>
          <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <ContentContainer>
            <Routes>
              <Route path="/run-query" element={<RunQuery />} />
              <Route path="/see-table" element={<SeeTables />} />
            </Routes>
          </ContentContainer>
        </SqlProvider>
      </div>
    </Router>
  );
}
export default App;
