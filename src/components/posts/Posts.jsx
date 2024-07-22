import Post from "./Post";
import axios from "axios";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Posts = (props) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading){
        try {
            axios.get(`https://sienabackend.vercel.app/${props.id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                  }
            })
            .then((data) => {
                let post = []
                if (props.id === "posts"){
                  post = data.data.data.posts;
                } else {
                  post = data.data.data.filtered
                }
                
                setPosts(post)
                setLoading(false);
              });
          } catch (err) {
            console.error(err)
            setLoading(false);
          }
      }
    }, [])
    if (props.id === "posts") {return(
        <div>
            {posts.map(post => (
                    <Post post={post.post} username={post.user.username} id={post.user._id}/>
                 ))}
        </div>
    )} else return(
      <div>
            {posts.map(post => (
                    <Post post={post.pm} username={post.from.username} id={post.from._id}/>
                 ))}
        </div>
    )
}

export default Posts;