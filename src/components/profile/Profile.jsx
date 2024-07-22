import {getUser} from "../../utilities/getUser";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import SendPm from "./SendPm";

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
            profileLink = location;
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
        <div>
            <h2>Profile</h2>
            <p>Pseudonimas: {user.username}</p>
            {pm && <SendPm id={location}/>}
        </div>
    )
}

export default Profile