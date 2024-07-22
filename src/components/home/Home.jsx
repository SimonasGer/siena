import { useNavigate, useLocation } from 'react-router-dom';
import { getUser} from "../../utilities/getUser";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../posts/Posts';
import "./home.scss"

const Home = () => {
    const navigate = useNavigate();
        useEffect( () => {
            if (!getUser()){
                navigate("/login");
            }
        }, [])


    const [post, setPost] = useState({
        post: ""
    });

    const HandleDown = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    

    const HandleChange = (e)=>{
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const PostHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://sienabackend.vercel.app/posts', post, 
                {headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                  }
                }
            )
            .then((data) => {
                window.location.reload();
              });
        } catch (err) {
            console.error(err);
        }
    }
    return(
        <main className='wall'>
            <div>
                <button className='down' onClick={HandleDown}>↓</button>
            </div>
            <div className='wall__title'>
                <p>Home</p>
            </div>
            <div className='wall__posts'>
                <Posts id ={"posts"}/>
            </div>
            <form className='form' onSubmit={PostHandler}>
                <fieldset className='form__fieldset'>
                    <label className='form__label' htmlFor="post">Zinute</label>
                    <textarea className='form__input' onChange={HandleChange} type="text" name="post" value={post.post} required></textarea>
                    <button className='form__submit' type="submit">Siusti</button>
                </fieldset>
            </form>
        </main>
    )
}

export default Home