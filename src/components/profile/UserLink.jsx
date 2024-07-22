import { Link } from "react-router-dom"
import { getUser } from "../../utilities/getUser";
const UserLink = (props) => {
    let link = ""
    if (props.id === getUser().id){
        link = "profile";
    } else {
        link = props.id
    }
    return(
        <button><Link to={`/${link}`}>{props.username}</Link></button>
    )
}
export default UserLink