import { useNavigate } from 'react-router-dom';
import {getUser} from "../../utilities/getUser";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileButton = () => {
    const [user, setUser] = useState("")
    let profile = useLocation().pathname;
    const navigate = useNavigate();
    const HandleProfile = () => {
        navigate('/profile');
        window.location.reload();
    };

    useEffect(() => {
        try {
            axios.get(`https://sienabackend.vercel.app/users/${getUser().id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                  }
            })
            .then((data) => {
                let user = data.data.data.user;
                setUser(user)
              });
          } catch (err) {
            console.error(err)
          }
    }, [])
    return (
        getUser() && (profile !== "/profile") && <button onClick={HandleProfile}>{user.username}</button>
    );
};

export default ProfileButton;