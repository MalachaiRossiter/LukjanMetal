import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const ItemDetails = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);

    const [item, setItem] = useState();

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res.data);
            setItem(res.data);
            setLoaded(true);
        })
        .catch((err) => console.log(err));
    }, []);

    return(
        <div>
            {setItem && loaded ? 
                <div class={"container"}>
                <div class={"row"}>
                    <div class={"column2-3"}>
                            <img class={"cardImage"} src={`/assets/databaseImages/${item.imagePath}`} alt="Avatar"/>
                    </div>
                    <div class={"column1-3"}>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <Link to={`/contact`} class={"containerLink"}>Get a Quote!</Link>
                    </div>
                </div>
                </div> : null}
        </div>
    )
}
export default ItemDetails;