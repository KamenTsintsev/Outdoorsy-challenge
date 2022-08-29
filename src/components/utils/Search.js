import { useState, useEffect } from "react";
import SearchField from "./SearchField";
import constants from "./constants.js";
import useFetch from "../../hooks/useFetch";

export default function Search({ setData }) {
    const [keywords, setKeywords] = useState("");
    const [offset, setOffset] = useState(0);
    const [url, setUrl] = useState("rentals");
    const { data, loading, error } = useFetch(url);
    const { limit } = constants;

    useEffect(() => {
        setUrl(`rentals?page[limit]=${limit}&page[offset]=${offset}`);

        if (keywords) {
            setUrl(
                `rentals?filter[keywords]=${keywords}&page[limit]=${limit}&page[offset]=${offset}`
            );
        }
        setData(data, loading, error);
    }, [keywords]);

    return (
        <>
            <SearchField setKeywords={setKeywords} />
        </>
    );
}
