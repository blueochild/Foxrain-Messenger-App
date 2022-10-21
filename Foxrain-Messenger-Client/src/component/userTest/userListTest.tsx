import { IuserInfo } from "./userTypeTest";

interface usersProps {
    users: IuserInfo[];
    onToggle: (Tuser: string) => void;
    onRemove: (Tuser: string) => void;
}
interface userProps {
    user: IuserInfo;
    onToggle: (Tuser: string) => void;
    onRemove: (Tuser: string) => void;
}

function User({ user, onToggle, onRemove}: userProps) {

    return (
        <div>
            <span style={{
                cursor:'pointer',
                color: user.userState.active ? 'green' : 'black'}}
                onClick={() => onToggle(user.userId)}>
                <b>{user.userId}</b>({user.userState?.nickname})
            </span>
            &nbsp;/&nbsp;
            <span>{user.userEmail}</span>
            <button onClick={() => onRemove(user.userId)}>삭제</button>
        </div>
    );
}

function UserList({ users, onToggle, onRemove }: usersProps){
    return (
        <div>
            {
                users.map(user => (
                    <User user={user} key={user.userCode} onToggle={onToggle} onRemove={onRemove}/>
                ))
            }
        </div>
    );
}

export default UserList;