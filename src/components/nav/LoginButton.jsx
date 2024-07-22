import { useNavigate } from 'react-router-dom';
import {getUser} from "../../utilities/getUser";
import "./nav.scss";

const LoginButton = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate('/login');
  };

  return (
    !getUser() && <button className='navLink' onClick={HandleClick}>Prisijungti</button>
  );
};

export default LoginButton;