/* User Pages */
import UserDelete from '../component/userDelete';
import UserSignup from '../component/userSignup';
import UserSignin from '../component/userSignin';
import UserList from '../component/userList'
import MainPage from '../component/main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from './store';
import { Provider } from 'react-redux';

/* page CSS */

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            {/* <Route path='/' element={<MainPage />} /> */}
            <Route path='/' element={<UserSignin />} />
            <Route path='/signup' element={<UserSignup />} />
            <Route path='/userlist' element={<><UserList /><UserDelete /></>} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
