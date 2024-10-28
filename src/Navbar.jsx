import "./Navbar.css"
import DarkMode from "./DarkMode.jsx"
const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop"
    },
    {
        id: 3,
        name: "About",
        link: "/#about"
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blog"
    },

]
let Navbar = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="container">
                    <div>
                        <a href="#" className="logo">ESHOP</a>
                    </div>
                    {/* menu-bar */}
                    <div className="main-link">
                        <ul className="navbar-link">
                            {MenuLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link}>{data.name}</a>
                                </li>
                            ))}
                            {/* dropdown */}
                            <li>
                                <a href="#" className="dropdown">
                                    Quick Links
                                </a>
                                {/* <span>
                                    <FaCreateDown />
                                </span> */}
                            </li>
                        </ul>

                    </div>

                </div>
                <div className="search-main">
                    <input type="text" placeholder="search" className="search-box" />
                    <div className="icon">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                </div>
                <button className="shop">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <div className="digit">4</div>
                </button>
                {/* Dark mode section */}
                <div>
                    <DarkMode />
                </div>
            </div>
        </>
    )
}
export default Navbar;