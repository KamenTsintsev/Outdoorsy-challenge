import { useState, useEffect } from "react";
import SearchField from "./SearchField";
import useFetch from "../../hooks/useFetch";

export default function Search({ setResponse, limit }) {
    const [keywords, setKeywords] = useState("");
    const [url, setUrl] = useState(`rentals?page[limit]=${limit}`);
    const { data, isLoading, error } = useFetch(url);

    useEffect(() => {
        if (keywords) {
            setUrl(`rentals?filter[keywords]=${keywords}&page[limit]=${limit}`);
        } else {
            setUrl(`rentals?page[limit]=${limit}`);
        }
    }, [keywords, limit]);

    useEffect(() => {
        setResponse({
            data: data?.data,
            included: data?.included,
            isLoading,
            error,
        });
    }, [url, data, isLoading, error]);

    return (
        <>
            <SearchField setKeywords={setKeywords} />
        </>
    );
}
