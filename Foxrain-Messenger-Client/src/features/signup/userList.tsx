import { useAppSelector } from "../../app/hooks";
import { initialStateType, IuserInfo } from '../sliceTypes'

interface userPrint{
    user: IuserInfo
}

function UsersPrint({ user }: userPrint){
    return(
        <div>
            <b>{user.uName}</b>({user.uId} / {user.uEmail})
        </div>
    )
}

function UserList(){
    
  const users = useAppSelector((state) => state.users)

  return(
    <div>
        {users.map(e => (
            <UsersPrint user={e.user.info} key={e.user.info.uId}/>
        ))}
    </div>
  )
}

export default UserList;