import { IuserInfo } from "./userType";

interface usersProps {
    users: IuserInfo[];
}
interface userProps {
    user: IuserInfo;
}

function User({ user }: userProps) {
    return (
        <div>
            <b>{user.userId}</b>({user.userState?.nickname}) <span>{user.userEmail}</span>
        </div>
    );
}

function UserList({ users }: usersProps) {

    return (
        <div>
            {
                users.map(user => (
                    <User user={user} key={user.userCode} />
                ))
            }
        </div>
    );
}

export default UserList;