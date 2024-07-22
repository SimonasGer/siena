import { useEffect, useState } from 'react';
import axios from 'axios';
import UserLink from "./UserLink"

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    
   
    useEffect(() => {
        if (loading){
        try {
            axios.get(`https://sienabackend.vercel.app/users`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                  }
            })
            .then((data) => {
                setUsers(data.data)
                setLoading(false);
              });
          } catch (err) {
            console.error(err)
            setLoading(false);
          }
      }
    }, [])
    return(
        <section className='wall'>
            <h2>Vartotojai</h2>
            {users.map(user => (
                    <UserLink username={user.username} id={user._id}/>
                 ))}
        </section>
    )
}

export default Users