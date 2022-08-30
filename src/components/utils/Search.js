import { useState, useEffect } from "react";
import SearchField from "./SearchField";
import constants from "./constants.js";
import useFetch from "../../hooks/useFetch";

const { limit } = constants;

export default function Search({ setResponse }) {
    const [keywords, setKeywords] = useState("");
    const [offset, setOffset] = useState(0);
    const [url, setUrl] = useState(
        `rentals?page[limit]=${limit}&page[offset]=${offset}`
    );
    const { data, isLoading, error } = useFetch(url);

    useEffect(() => {
        if (keywords) {
            setUrl(
                `rentals?filter[keywords]=${keywords}&page[limit]=${limit}&page[offset]=${offset}`
            );
        } else {
            setUrl(`rentals?page[limit]=${limit}&page[offset]=${offset}`);
        }

        setResponse({
            data: data?.data,
            included: data?.included,
            isLoading,
            error,
        });
    }, [keywords]);

    return (
        <>
            <SearchField setKeywords={setKeywords} />
        </>
    );
}
