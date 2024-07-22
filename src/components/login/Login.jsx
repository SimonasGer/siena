import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./form.scss";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [user, setUser] = useState({
        username: "",
        password: "",
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
            await axios.post('https://sienabackend.vercel.app/users/login', user)
            .then((data) => {
                localStorage.setItem("token", data.data.data.token);
              });
            navigate('/');
          } catch (err) {
            setError(err.response.data.message)
          }
    }

    return(
        <form className="form" onSubmit={HandleSubmit}>
            <fieldset className="form__fieldset">
                <label className="form__label" htmlFor="username">Pseudonimas</label>
                <input className="form__input" onChange={HandleChange} value={user.username} required type="text" name="username"/>
                <label className="form__label" htmlFor="password">Slaptazodis</label>
                <input className="form__input" onChange={HandleChange} value={user.password} required type="password" name="password"/>
                <p className="form__error">{error}</p>
                <button className="form__submit" type="submit">Prisijungti</button>
            </fieldset>
        </form>
    )
}

export default Login