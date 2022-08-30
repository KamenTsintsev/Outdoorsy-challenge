import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ response }) {
    const [data, setData] = useState(null);
    const [included, setIncluded] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setData(response.data);
        setIncluded(response.included);
        setIsLoading(response.isLoading);
        setError(response.error);

        setProductList(
            data?.map((prod) => {
                return (
                    <ProductCard
                        key={prod.id}
                        itemData={prod}
                        included={included}
                    />
                );
            })
        );
        console.log(productList);
    }, [response, data, included, isLoading, error]);

    return <ul>{!isLoading ? productList : "Loading..."}</ul>;
}
