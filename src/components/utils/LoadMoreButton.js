import React, { useState, useEffect } from "react";
import constants from "./constants.js";

import style from "./LoadMoreButton.module.scss";

export default function LoadMoreButton({ setLimit }) {
    function onClickHandler() {
        setLimit((oldLimit) => oldLimit + constants.limit);
    }

    return (
        <button className={style.loadMoreBtn} onClick={onClickHandler}>
            Load More...
        </button>
    );
}
