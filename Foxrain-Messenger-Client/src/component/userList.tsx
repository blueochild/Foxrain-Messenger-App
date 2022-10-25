import { useAppSelector } from "../app/hooks";
import { initialStateType } from '../features/sliceTypes'

interface users{
    user: initialStateType;
}

function UsersPrint({ user }: users){
    
    let activeColor: string = "gray"

    switch (user.userActivity.active) {
        case "ONLINE": activeColor = "green"; break;
        case "OFFLINE": activeColor = "gray"; break;
        case "BUSY": activeColor = "red"; break;
    }

    return(
        <div>
            <b style={{
                color : activeColor
            }}>{user.info.uName}</b>({user.info.uId} / {user.info.uEmail})
        </div>
    )
}

function UserList(){
    
  const users = useAppSelector((state) => state.users)

  return(
    <div>
        {users.map(e => (
            <UsersPrint user={e.user} key={e.user.info.uId}/>
        ))}
    </div>
  )
}

export default UserList;