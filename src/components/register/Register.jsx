import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [user, setUser] = useState({
        username: "",
        password: "",
        password_confirm: ""
    })

    const HandleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const res = await axios.post('https://sienabackend.vercel.app/users/register', user);
            localStorage.setItem('token', res.data.token);
            navigate('/');
          } catch (err) {
            console.error(err);
            setError("Neteisingi duomenys")
          }
    }
    return(
        <form onSubmit={HandleSubmit}>
            <fieldset>
                <label htmlFor="username">Pseudonimas</label>
                <input onChange={HandleChange} value={user.username} required type="text" name="username"/>
                <label htmlFor="password">Slaptazodis</label>
                <input onChange={HandleChange} value={user.password} required minLength={"6"} type="password" name="password"/>
                <label htmlFor="password_confirm">Pakartokite slaptazodi</label>
                <input onChange={HandleChange} value={user.password_confirm} required minLength={"6"} type="password" name="password_confirm"/>
                <p>{error}</p>
                <button type="submit">Registruotis</button>
            </fieldset>
        </form>
    )
}

export default Register