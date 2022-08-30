import React, { useState, useEffect } from "react";
import altImage from "../../images/No_image_available.svg.png";

import style from "./ProductCard.module.scss";

export default function ProductCard({ itemData, included }) {
    const [image, setImage] = useState("");

    useEffect(() => {
        const result = included.filter(
            (item) =>
                item.type === "images" &&
                item.id === itemData?.relationships?.primary_image?.data?.id
        );
        setImage(result[0].attributes.url);
    }, []);

    return (
        <li className={style.productCard}>
            <div className={style.imageHolder}>
                <img
                    src={image ? image : altImage}
                    alt=""
                    loading="lazy"
                    className={style.image}
                />
            </div>
            <p className={style.title}>{itemData.attributes.name}</p>
        </li>
    );
}
