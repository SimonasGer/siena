import { useNavigate } from 'react-router-dom';
import {getUser} from "../../utilities/getUser";

const LoginButton = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate('/login');
  };

  return (
    !getUser() && <button onClick={HandleClick}>Prisijungti</button>
  );
};

export default LoginButton;