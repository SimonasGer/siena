import { Link } from 'react-router-dom';
import { getUser } from '../../utilities/getUser';
import "./post.scss"

const Post = (props) => {
    let link = ""
    if (props.id === getUser().id){
        link = "profile";
    } else {
        link = props.id
    }

    return(
        <article className='post'>
            <Link className='post__user' to={`/${link}`}>{props.username}</Link>
            <p className='post__content'>{props.post}</p>
        </article>
    )
}

export default Post