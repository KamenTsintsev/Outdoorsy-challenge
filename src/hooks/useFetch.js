import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetch(url, (data = { method: "GET" }))
            .then((response) => {
                if (response.ok !== true) {
                    setError(response.json());
                }

                if (response.status == 204) {
                    return response;
                } else {
                    return response.json();
                }
            })
            .then((response) => {
                setLoading(null);
                setData(response);
            })
            .catch((err) => {
                setLoading(null);
                setError(err);
            });
    }, [url]);

    return { data, loading, error };
}
