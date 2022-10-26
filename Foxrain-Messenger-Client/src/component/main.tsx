import { Link } from "react-router-dom"

function MainPage(){
    return(
        <div>
            <p>Hello, i'm MainPage!!</p>
            <Link to={"/userList"}>유저 리스트</Link>
        </div>
    )
}

export default MainPage