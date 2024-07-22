import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../utilities/getUser";
import Posts from "./Posts";
import axios from "axios";

const Pm = () => {
    const to = useLocation().pathname.slice(4);
    const [post, setPost] = useState({
        pm: "",
        from: `${getUser().id}`,
        to: `${to}`
    });
    const navigate = useNavigate();
    const HandleDown = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    useEffect( () => {
        if (!getUser()){
            navigate("/login");
        }
    }, [])

    const HandleChange = (e)=>{
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const PostHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://sienabackend.vercel.app/pm', post, 
                {headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                  }
                }
            )
            .then((data) => {
                console.log(data);
                window.location.reload();
              });
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <main>
            <div>
                <button onClick={HandleDown}>zemyn</button>
            </div>
            <div>
                <Posts id ={`pm?id1=${post.from}&id2=${post.to}`}/>
            </div>
            <form onSubmit={PostHandler}>
                <fieldset>
                    <label htmlFor="pm">Zinute</label>
                    <textarea onChange={HandleChange} name="pm" value={post.pm}></textarea>
                    <button type="submit">Siusti</button>
                </fieldset>
            </form>
        </main>
    )
}

export default Pm