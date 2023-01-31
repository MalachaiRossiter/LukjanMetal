import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <Link to ={"/"}><img src={"assets/images/LukjanLogo.png"} alt={"Beans"}/></Link>
    )
}
export default NavBar;