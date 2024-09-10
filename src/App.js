import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListUser from './Components/ListUsers';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import DescUser from './Components/DescUser';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  //FAKE AUTH
  const [auth,setAuth] = useState(false)
  return (
    <div>
      <NavUser auth={auth} setAuth={setAuth}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListUsers' element={<PrivateRoute auth={auth}><ListUser/></PrivateRoute>}/>
        <Route path='/DescUser/:id' element={<PrivateRoute auth={auth}><DescUser/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
