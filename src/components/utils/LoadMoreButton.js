import React, { useState, useEffect } from "react";
import constants from "./constants.js";

export default function LoadMoreButton({ setLimit }) {
    function onClickHandler() {
        setLimit((oldLimit) => oldLimit + constants.limit);
    }

    return <button onClick={onClickHandler}>Load More...</button>;
}
