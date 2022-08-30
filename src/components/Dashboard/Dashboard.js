import { useState, useEffect } from "react";
import ProductList from "../ProductList/ProductList";
import Search from "../utils/Search";
import constants from "../utils/constants";
import LoadMoreButton from "../utils/LoadMoreButton";

import style from "./Dashboard.module.scss";

export default function Dashboard() {
    const [limit, setLimit] = useState(constants.limit);
    const [response, setResponse] = useState({});
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(response);
    }, [response]);

    return (
        <div className={style.dashboardContainer}>
            <header>
                <Search setResponse={setResponse} limit={limit} />
            </header>
            <main>
                <ProductList response={data} />
                {response?.data?.length > 0 ? (
                    <LoadMoreButton setLimit={setLimit} />
                ) : (
                    ""
                )}
            </main>
        </div>
    );
}
