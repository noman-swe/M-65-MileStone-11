import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import UpdateUser from './components/UdpateUser/UpdateUser';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/user/add' element={<AddUser></AddUser>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        {/* update korle kono ekta particuler user k update korbo, sobai na or ontoto eksathe sobai k na || tai id params add kore dite hobe*/}
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
