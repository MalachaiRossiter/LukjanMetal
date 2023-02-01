import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <nav class={"flex items-end justify-end px-20 py-10 border border-b-black"}>
                <Link to={"/"} class={"mr-auto"}><img class={"h-12"} src={"assets/images/LukjanLogo.png"} alt={"Beans"}/></Link>
                <div>
                    <Link to={"/"}>Products</Link>
                    <Link to={"/"}>About</Link>
                    <Link to={"/"}>Contact</Link>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;