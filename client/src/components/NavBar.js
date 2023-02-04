import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <nav class={"navbar"}>
                <Link to={"/"}><img class={"h-8"} src={"assets/images/LukjanLogo.png"} alt={"Beans"}/></Link>
                <Link to={"/"} class={"navlinks"}>Products</Link>
                <Link to={"/"} class={"navlinks"}>About</Link>
                <Link to={"/"} class={"navlinks"}>Contact</Link>
                <Link to={"/"} class={"navlinks"}>Careers</Link>
                <form class={"navForm"} onSubmit={"onSubmitHandler"}>
                    <input class={"navSearch"} type={"text"} value={"search a product"}/>
                    <input class={"navBtn"} type={"submit"} value={"Search"}/>
                </form>
            </nav>
        </div>
    )
}
export default NavBar;