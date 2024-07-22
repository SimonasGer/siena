import { useNavigate } from 'react-router-dom';
import {getUser} from "../../utilities/getUser";

const LogoutButton = () => {
  const navigate = useNavigate();
  const HandleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page
  };

  return (
    getUser() && <button onClick={HandleLogout}>Atsijungti</button>
  );
};

export default LogoutButton;