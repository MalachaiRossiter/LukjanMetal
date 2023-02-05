import {Link} from 'react-router-dom';

const Footer = (props) => {
    return (
        <div class={"row footer"}>
            <div class={"column footerLeft"}>
                <ul>
                    <li><Link to={""}>Home</Link></li>
                    <li><Link to={""}>Careers</Link></li>
                    <li><Link to={""}>Contact</Link></li>
                </ul>
            </div>
            <div class={"column footerRight"}>
                <ul>
                <li>Lukjan Metal</li>
                <li>645 Industry Rd, Conneaut, OH 44030</li>
                <li>(440) 381-8244</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;