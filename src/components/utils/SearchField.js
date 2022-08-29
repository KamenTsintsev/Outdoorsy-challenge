import { useState, useEffect } from "react";

export default function SearchField({ setKeywords }) {
    const [searchField, setSearchField] = useState("");

    const onInputChangeHandler = (e) => {
        setSearchField((prevState) => {
            const inputData = prevState + e.target.value;

            console.log(inputData);
        });
    };

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
