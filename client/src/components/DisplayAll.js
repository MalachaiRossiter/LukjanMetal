import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DisplayAll = (props) => {
    const {keyword} = useParams();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        console.log(keyword);
        if (keyword) {
            axios.get(`http://localhost:8000/api/product/keyword/${keyword}`)
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err));
        }
        else {
            axios.get(`http://localhost:8000/api/product/`)
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err));
        }
    }, []);

    return (
        <div class={"container"}>
            <div class={"row"}>
                <div class={"column1-3"}>
                    <div class={"sidebar"}>
                        <ul>
                        <Link to={"/product/keyword/wrench"}><li class={"sidebarList"}>Wrenches</li></Link>
                        <Link to={"/product/keyword/pipe"}><li class={"sidebarList"}>Pipes</li></Link>
                        <Link to={"/product/keyword/food"}><li class={"sidebarList"}>Food</li></Link>
                        </ul>
                    </div>
                </div>
                <div class={"column2-3"}>
                    <div class={"grid-container"}>
                    {productList && productList.map((product, index) => (
                        <div class={"grid-item"} key={index}>
                            <div class={"card"}>
                                <img class={"cardImage"} src={`/assets/databaseImages/${product.imagePath}`} alt="Avatar"/>
                                <div class={"productContainer"}>
                                    <h4><b>{product.name}</b></h4>
                                    <p>{product.description}</p>
                                    <Link to={`/product/${product._id}`} class={"containerLink"}>View Product</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DisplayAll;