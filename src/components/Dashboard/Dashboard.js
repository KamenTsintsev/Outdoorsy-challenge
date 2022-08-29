import { useState, useEffect } from "react";
import Search from "../utils/Search";

export default function Dashboard() {
    const [data, setData] = useState([]);

    return (
        <>
            <header>
                <Search setData={setData} />
            </header>
        </>
    );
}
