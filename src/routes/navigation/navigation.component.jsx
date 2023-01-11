import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.style.scss";
import CrwnLogo from "../../assets/crown.svg";

const Navigation = () => {
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img src={CrwnLogo} className="logo" alt="react logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/signin">
                        SIGNIN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;