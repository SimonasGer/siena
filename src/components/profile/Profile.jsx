import {getUser} from "../../utilities/getUser";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import SendPm from "./SendPm";
import "./profile.scss";

const Profile = () => {
    const [user, setUser] = useState({})
    const [pm, setPm] = useState(false)
    const [loading, setLoading] = useState(true);

    let profileLink = undefined;
    let location = useLocation().pathname

    const navigate = useNavigate();
    useEffect( () => {
        if (!getUser()){
            navigate("/login");
        }
    }, [])

    useEffect(() => {
        if(location !== "/profile"){
            profileLink = location.slice(1);
            setPm(true)
        }
        if (loading){
        try {
            axios.get(`https://sienabackend.vercel.app/users/${profileLink || getUser().id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                  }
            })
            .then((data) => {
                let user = data.data.data.user;
                setUser(user)
                setLoading(false);
              });
          } catch (err) {
            console.error(err)
            setLoading(false);
          }
      }
    }, [])

    return(
        <div className="profile">
            <h2 className="profile__title">Profilis</h2>
            <p className="profile__name">Pseudonimas: {user.username}</p>
            {pm && <SendPm className="profile__pm" id={location}/>}
        </div>
    )
}

export default Profile