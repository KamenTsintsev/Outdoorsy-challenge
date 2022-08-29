import { useState, useEffect } from "react";

export default function SearchField({ setKeywords }) {
    const [searchField, setSearchField] = useState("");
    const [inputValue, setInputValue] = useState("");

    const onInputChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    // "truck " ->

    useEffect(() => {
        if (searchField === inputValue) return;
        if (inputValue.replace(searchField, "").trim().length === 0) return;

        let queryString = "";
        queryString = inputValue
            .split(" ")
            .filter((el) => el !== "")
            .join("%20");

        setSearchField(inputValue);
        setKeywords(queryString);
    }, [inputValue]);

    return (
        <form action="GET">
            <input
                type="text"
                name="searchField"
                id="searchField"
                placeholder="Search"
                value={inputValue || ""}
                onChange={onInputChangeHandler}
            />
        </form>
    );
}
