import { useNavigate } from 'react-router-dom';

const SendPm = (props) => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate(`/pm${props.id}`);
  };

  return (
    <button className='otherLink' onClick={HandleClick}>Siusti PM</button>
  );
};

export default SendPm;