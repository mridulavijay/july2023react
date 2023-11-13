
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './ui-components/Login';
import SignUp from './ui-components/SignUp';
import Main from './ui-components/Main';
import AddPost from './elements/AddPost';
import ViewAll from './elements/ViewAll';
import MyProfile from './elements/MyProfile';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign' element={<SignUp/>}/>
        <Route path='/addpost' element={<Main child={<AddPost method="post" data={{title:'',description:'',image:''}}/>}/>}/>
        <Route path='/viewall' element={<Main child={<ViewAll/>}/>}/>
        <Route path='/myprofile' element={<Main child={<MyProfile/>}/>}/>

      </Routes>
    </div>
  );
}

export default App;
