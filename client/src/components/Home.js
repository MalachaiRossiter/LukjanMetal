import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home = (props) => {
    const [productList, setProductList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(res => {
            console.log(res.data);
            setProductList(res.data);
            setLoaded(true);
        })
        .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            <div class={"heroSection"}>
                <h1><i>Lukjan Metals</i></h1>
                <h3 class={"heroH3"}>Manufacturing high quality products since 1964</h3>
                <button class={"btnMajor"}>Learn More &gt;</button>
            </div>

        {productList && loaded ? 
                <div class={"productSection"}>
                    <h2>Recommended Items</h2>
                    <div class={"row"}>
                    <div class={"column"}>
                        <div class={"card"}>
                            <img class={"cardImage"} src={`/assets/databaseImages/${productList[1].imagePath}`} alt="Avatar"/>
                            <div class={"container"}>
                                <h4><b>{productList[1].name}</b></h4>
                                <p>{productList[1].description}</p>
                                <Link to={`/product/display/${productList[2].id}`} class={"containerLink"}>View Product</Link>
                            </div>
                        </div>
                    </div>
    
                    <div class={"column"}>
                        <div class={"card"}>
                            <img class={"cardImage"} src={`/assets/databaseImages/${productList[2].imagePath}`} alt="Avatar"/>
                            <div class={"container"}>
                                <h4><b>{productList[2].name}</b></h4>
                                <p>{productList[2].description}</p>
                                <Link to={`/product/display/${productList[2].id}`} class={"containerLink"}>View Product</Link>
                            </div>
                        </div>
                    </div>

                    <div class={"column"}>
                        <div class={"card"}>
                            <img class={"cardImage"} src={`/assets/databaseImages/${productList[3].imagePath}`} alt="Avatar"/>
                            <div class={"container"}>
                                <h4><b>{productList[3].name}</b></h4>
                                <p>{productList[3].description}</p>
                                <Link to={`/product/display/${productList[3].id}`} class={"containerLink"}>View Product</Link>
                            </div>
                        </div>
                    </div>

                    <div class={"column"}>
                        <div class={"card"}>
                            <img class={"cardImage"} src={`/assets/databaseImages/${productList[0].imagePath}`} alt="Avatar"/>
                            <div class={"container"}>
                                <h4><b>{productList[0].name}</b></h4>
                                <p>{productList[0].description}</p>
                                <Link to={`/product/display/${productList[0].id}`} class={"containerLink"}>View Product</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        : null}

        <div class={"storySection"}>
            <h2>We make an impact</h2>
            <div class={"row"}>
                <div class={"column storyCard i1"}>
                    <h3>Learn How We Began</h3>
                    <p>our story of a family owned company</p>
                </div>
                <div class={"column storyCard i1"}>
                    <h3>Learn How We Began</h3>
                    <p>our story of a family owned company</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Home;