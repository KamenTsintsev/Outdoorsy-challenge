import { useState, useEffect } from "react";
import { useDebounce } from "react-use";

import style from "./SearchField.module.scss";

export default function SearchField({ setKeywords }) {
    const [searchField, setSearchField] = useState("");
    const [debounceValue, setDebounceValue] = useState("");
    const [inputValue, setInputValue] = useState("");

    const [, cancel] = useDebounce(
        () => {
            setDebounceValue(inputValue);
        },
        1000,
        [inputValue]
    );

    const onInputChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

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
    }, [debounceValue]);

    return (
        <form action="GET">
            <input
                type="text"
                name="searchField"
                id="searchField"
                placeholder="Search"
                className={style.searchField}
                value={inputValue || ""}
                onChange={onInputChangeHandler}
            />
        </form>
    );
}
