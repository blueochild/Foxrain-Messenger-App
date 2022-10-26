/* User Pages */
import UserDelete from '../component/userDelete';
import UserSignup from '../component/userSignup';
import UserSignin from '../component/userSignin';
import UserList from '../component/userList'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

/* page CSS */
//import './style/App.css';
import MainPage from '../component/main';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/signin' element={<UserSignin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/userlist' element={<><UserList /><UserDelete /></>} />
      </Routes>
    </Router>
  );
}

export default App;
