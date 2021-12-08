import React from "react";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../pages/UserSingupPage";
import LanguageSelector from "../components/LanguageSelector";
import LoginPage from "../pages/LoginPage";

function App() {
  return (
      <div className="row">
          <div className="col">
              <ApiProgress path="/api/1.0/users">
                  <React.StrictMode><UserSignupPage/></React.StrictMode>
              </ApiProgress>
          </div>
          <div className="col">
              <ApiProgress>
                  <LoginPage />
              </ApiProgress>
          </div>

        <LanguageSelector/>
      </div>
  );
}

export default App;
