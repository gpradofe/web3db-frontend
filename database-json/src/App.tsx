import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import RunQuery from "./Components/Pages/RunQuery";
import SeeTables from "./Components/Pages/SeeTables";
import { SqlContext, SqlProvider } from "./context/SqlContext";
import SideBar from "./Components/Organisms/SideBar";
import LoginPage from "./Components/Pages/Login";
interface MainLayoutProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { metamaskAccount } = useContext(SqlContext);

  if (!metamaskAccount) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
// Layout component with sidebar
const MainLayout: React.FC<MainLayoutProps> = ({
  toggleSidebar,
  isSidebarOpen,
}) => {
  const ContentContainer = styled.div`
    margin-left: ${isSidebarOpen ? "250px" : "0"};
    transition: margin-left 0.3s;
  `;

  return (
    <>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <ContentContainer>
        <Routes>
          <Route path="/run-query" element={<RunQuery />} />
          <Route path="/see-tables" element={<SeeTables />} />
        </Routes>
      </ContentContainer>
    </>
  );
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <SqlProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <MainLayout
                    toggleSidebar={toggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
        </SqlProvider>
      </div>
    </Router>
  );
}

export default App;
