import { useState, useEffect } from "react";
import SearchField from "./SearchField";
import constants from "./constants.js";
import useFetch from "../../hooks/useFetch";

export default function Search({ setData }) {
    const [keywords, setKeywords] = useState("");
    const [offset, setOffset] = useState(0);
    const { endpoints, limit } = constants;
    const { data, loading, error } = useFetch(endpoints.url);

    console.log(data);
    let url = `${endpoints.url}?page[limit]=${limit}&page[offset]=${offset}`;

    if (keywords) {
        url = `${endpoints.url}?filter[keywords]=${keywords}&page[limit]=${limit}&page[offset]=${offset}`;
    }

    return (
        <>
            <header>
                <SearchField setKeywords={setKeywords} />
            </header>
        </>
    );
}
