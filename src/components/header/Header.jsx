import { Link } from "react-router-dom";
import LogoutButton from "../nav/LogoutButton";
import RegisterButton from "../nav/RegisterButton";
import LoginButton from "../nav/LoginButton";
import ProfileButton from "../nav/ProfileButton";
import UsersButton from "../nav/UsersButton";

const Header = () => {
    return(
        <header>
            <Link to={"/"}>
                <h1>siena</h1>
            </Link>
            <nav>
                <LoginButton/>
                <RegisterButton/>
                <LogoutButton/>
                <ProfileButton/>
                <UsersButton/>
            </nav>
        </header>
    )
}

export default Header