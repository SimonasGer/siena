import { Link } from "react-router-dom";
import LogoutButton from "../nav/LogoutButton";
import RegisterButton from "../nav/RegisterButton";
import LoginButton from "../nav/LoginButton";
import ProfileButton from "../nav/ProfileButton";
import UsersButton from "../nav/UsersButton";
import "./header.scss";

const Header = () => {
    return(
        <header className="header">
            <Link className="header__title" to={"/"}>siena</Link>
            <nav className="header__nav">
                <LoginButton className="header_navLink"/>
                <RegisterButton className="header_navLink"/>
                <LogoutButton className="header_navLink"/>
                <ProfileButton className="header_navLink"/>
                <UsersButton className="header_navLink"/>
            </nav>
        </header>
    )
}

export default Header