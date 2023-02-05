import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
    const [search, setSearch] = useState("Search a product");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate(`/product/keyword/${search}`);
    }

    return (
        <div>
            <nav class={"navbar"}>
                <Link to={"/"}><img class={"h-8"} src={"assets/images/LukjanLogo.png"} alt={"Beans"}/></Link>
                <Link to={"/product"} class={"navlinks"}>Products</Link>
                <Link to={"/about"} class={"navlinks"}>About</Link>
                <Link to={"/"} class={"navlinks"}>Contact</Link>
                <Link to={"/"} class={"navlinks"}>Careers</Link>
                <form class={"navForm"} onSubmit={onSubmitHandler}>
                    <input class={"navSearch"} type={"text"} value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <input class={"navBtn"} type={"submit"} value={"Search"}/>
                </form>
            </nav>
        </div>
    )
}
export default NavBar;