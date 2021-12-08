import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap-override.scss';
import App from './App';
import UserSignupPage from "./pages/UserSingupPage";
import LoginPage from "./pages/LoginPage";
import reportWebVitals from './reportWebVitals';
import './i18n';
import LanguageSelector from "./components/LanguageSelector";
import ApiProgress from "./shared/ApiProgress";

ReactDOM.render(
    <div>
        <ApiProgress>
            <React.StrictMode><LoginPage/></React.StrictMode>
        </ApiProgress>

        <LanguageSelector/>
    </div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
