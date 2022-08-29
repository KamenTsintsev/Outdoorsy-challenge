import { Link } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import logo from "./images/outdoorsy-inc-logo-vector.png";

import "./App.scss";

function App() {
    return (
        <>
            <header>
                <a href={"https://www.outdoorsy.com/"}>
                    <img src={logo} alt="Outdoorsy's logo" className="logo" />
                </a>
            </header>
            <main className="mainContent">
                <Dashboard />
            </main>
        </>
    );
}

export default App;
