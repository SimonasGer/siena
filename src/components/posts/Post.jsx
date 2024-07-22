import { Link } from 'react-router-dom';
import { getUser } from '../../utilities/getUser';
const Post = (props) => {
    let link = ""
    if (props.id === getUser().id){
        link = "profile";
    } else {
        link = props.id
    }

    return(
        <article>
            <h2><Link to={`/${link}`}>{props.username}</Link></h2>
            <p>{props.post}</p>
        </article>
    )
}

export default Post