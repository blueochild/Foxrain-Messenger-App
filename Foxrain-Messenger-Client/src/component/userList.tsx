import { useAppSelector } from "../app/hooks";
import { initialStateType } from '../features/sliceTypes'

interface users{
    user: initialStateType;
}

function UsersPrint({ user }: users){
    return(
        <div>
            <b style={{
                color : user.userActivity.active ? "green" : "black"
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