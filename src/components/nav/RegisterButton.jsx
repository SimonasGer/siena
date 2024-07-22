import { useNavigate } from 'react-router-dom';
import {getUser} from "../../utilities/getUser";
import "./nav.scss";

const RegisterButton = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    localStorage.removeItem('token');
    navigate('/register'); // Redirect to login page
  };

  return (
    !getUser() && <button className='navLink' onClick={HandleClick}>Registruotis</button>
  );
};

export default RegisterButton;