import { Link } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import logo from "./images/outdoorsy-inc-logo-vector.png";

import style from "./App.module.scss";

function App() {
    return (
        <div className={style.webPage}>
            <header className={style.logo}>
                <a href={"https://www.outdoorsy.com/"}>
                    <img src={logo} alt="Outdoorsy's logo" className="logo" />
                </a>
            </header>
            <main className={style.mainContent}>
                <Dashboard />
            </main>
        </div>
    );
}

export default App;
