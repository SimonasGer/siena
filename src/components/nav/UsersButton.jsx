import { useNavigate } from 'react-router-dom';
import {getUser} from "../../utilities/getUser";
import { useLocation } from 'react-router-dom';

const UsersButton = () => {
    let profile = useLocation().pathname;
    const navigate = useNavigate();
    const HandleProfile = () => {
        navigate('/users'); // Redirect to login page
    };

    return (
        getUser() && (profile !== "/users") && <button onClick={HandleProfile}>Vartotojai</button>
    );
};

export default UsersButton;