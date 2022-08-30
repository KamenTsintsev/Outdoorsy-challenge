import { useState, useEffect } from "react";
import ProductList from "../ProductList/ProductList";
import Search from "../utils/Search";

import style from "./Dashboard.module.scss";

export default function Dashboard() {
    const [response, setResponse] = useState({});
    return (
        <div className={style.dashboardContainer}>
            <header>
                <Search setResponse={setResponse} />
            </header>
            <main>
                <ProductList response={response} />
            </main>
        </div>
    );
}
