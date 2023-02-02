import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <nav class={"navbar"}>
                <Link to={"/"} class={"mr-auto"}><img class={"h-8"} src={"assets/images/LukjanLogo.png"} alt={"Beans"}/></Link>
                <div >
                    <Link to={"/"} class={"navlinks"}>Products</Link>
                    <Link to={"/"} class={"navlinks"}>About</Link>
                    <Link to={"/"} class={"navlinks"}>Contact</Link>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;