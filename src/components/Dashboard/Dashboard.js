import { useState, useEffect } from "react";
import ProductList from "../ProductList/ProductList";
import Search from "../utils/Search";

export default function Dashboard() {
    const [response, setResponse] = useState({});
    return (
        <>
            <header>
                <Search setResponse={setResponse} />
            </header>
            <main>
                <ProductList response={response} />
            </main>
        </>
    );
}
