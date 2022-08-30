import { useState, useEffect } from "react";
import constants from "../components/utils/constants";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { endpoints } = constants;

    useEffect(() => {
        setIsLoading(true);
        setData(null);
        setError(null);

        fetch(endpoints.baseUrl + url, { method: "GET" })
            .then((response) => {
                if (response.ok !== true) {
                    setError(response.json());
                }

                if (response.status === 204) {
                    return response;
                } else {
                    return response.json();
                }
            })
            .then((response) => {
                setIsLoading(false);
                setData(response);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
    }, [url, endpoints.baseUrl]);

    return { data, isLoading, error };
}
