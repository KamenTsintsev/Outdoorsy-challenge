import { useState, useEffect } from "react";

export default function SearchField({ setKeywords }) {
    const [searchField, setSearchField] = useState("");

    const onInputChangeHandler = (e) => {
        setSearchField(e.target.value);
    };

    useEffect(() => {
        let queryString = "";
        queryString = searchField.replaceAll(" ", "%20");

        setKeywords(queryString);
    }, [searchField]);

    return (
        <form action="GET">
            <input
                type="text"
                name="searchField"
                id="searchField"
                placeholder="Search"
                value={searchField || ""}
                onChange={onInputChangeHandler}
            />
        </form>
    );
}
