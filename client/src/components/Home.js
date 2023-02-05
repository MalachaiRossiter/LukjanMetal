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
                            <img class={"cardImage"} src={`/assets/databaseImages/${productList[1].imagePath}`} alt="Product item"/>
                            <div class={"productContainer"}>
                                <h4><b>{productList[1].name}</b></h4>
                                <p>{productList[1].description}</p>
                                <Link to={`/product/${productList[2]._id}`} class={"containerLink"}>View Product</Link>
                            </div>
                        </div>
                    </div>
    
                    <div class={"column"}>
                        <div class={"card"}>
                            <img class={"cardImage"} src={`/assets/databaseImages/${productList[2].imagePath}`} alt="Avatar"/>
                            <div class={"productContainer"}>
                                <h4><b>{productList[2].name}</b></h4>
                                <p>{productList[2].description}</p>
                                <Link to={`/product/${productList[2]._id}`} class={"containerLink"}>View Product</Link>
                            </div>
                        </div>
                    </div>

                    <div class={"column"}>
                        <div class={"card"}>
                            <img class={"cardImage"} src={`/assets/databaseImages/${productList[3].imagePath}`} alt="Avatar"/>
                            <div class={"productContainer"}>
                                <h4><b>{productList[3].name}</b></h4>
                                <p>{productList[3].description}</p>
                                <Link to={`/product/${productList[3]._id}`} class={"containerLink"}>View Product</Link>
                            </div>
                        </div>
                    </div>

                    <div class={"column"}>
                        <div class={"card"}>
                            <img class={"cardImage"} src={`/assets/databaseImages/${productList[0].imagePath}`} alt="Avatar"/>
                            <div class={"productContainer"}>
                                <h4><b>{productList[0].name}</b></h4>
                                <p>{productList[0].description}</p>
                                <Link to={`/product/${productList[0]._id}`} class={"containerLink"}>View Product</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        : null}

        <div class={"storySection"}>
            <h1>We make an impact</h1>
            <div class={"row"}>
                <Link to={"/about"}><div class={"column storyCard img1"}>
                    <h3>Learn How We Began</h3>
                    <p>A story of a family owned company</p>
                </div>
                </Link>
                <div class={"column storyCard img2"}>
                    <h3>Learn How We Began</h3>
                    <p>our story of a family owned company</p>
                </div>
            </div>
        </div>

        <div class={"careerSection"}>
            <h2>Your high quality career is waiting</h2>
            <Link to={""}>
            <div class={"careerContainer"}>
                <h3>Learn about our careers</h3>
                <button class={"btnMajor"}>Learn More &gt;</button>
            </div>
            </Link>
        </div>
        </div>
    )
}
export default Home;