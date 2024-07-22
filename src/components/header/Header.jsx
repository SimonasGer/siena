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
                <LoginButton className="header__navLink"/>
                <RegisterButton className="header__navLink"/>
                <LogoutButton className="header__navLink"/>
                <ProfileButton className="header__navLink"/>
                <UsersButton className="header__navLink"/>
            </nav>
        </header>
    )
}

export default Header