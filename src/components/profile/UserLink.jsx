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
        <Link className="otherLink" to={`/${link}`}>{props.username}</Link>
    )
}
export default UserLink