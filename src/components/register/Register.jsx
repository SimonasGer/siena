import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../login/form.scss"

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
        <form className="form" onSubmit={HandleSubmit}>
            <fieldset className="form__fieldset">
                <label className="form__label" htmlFor="username">Pseudonimas</label>
                <input className="form__input" onChange={HandleChange} value={user.username} required type="text" name="username"/>
                <label className="form__label" htmlFor="password">Slaptazodis</label>
                <input className="form__input" onChange={HandleChange} value={user.password} required minLength={"6"} type="password" name="password"/>
                <label className="form__label" htmlFor="password_confirm">Pakartokite slaptazodi</label>
                <input className="form__input" onChange={HandleChange} value={user.password_confirm} required minLength={"6"} type="password" name="password_confirm"/>
                <p className="form__error">{error}</p>
                <button className="form__submit" type="submit">Registruotis</button>
            </fieldset>
        </form>
    )
}

export default Register