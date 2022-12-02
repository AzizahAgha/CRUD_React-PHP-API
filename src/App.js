import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import ListUser from './components/ListUser';
import Create from './components/create';
import EditUser from './components/EditUser';


function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
      <nav>
        <ul className='ul'>
          <li className='li'>
            <Link to="/" className=" btn btn-primary btn-xs">List Users</Link>
          </li>
          <li className='li'>
          <Link to="/create" className=" btn btn-primary btn-xs">Create Users</Link>
          </li>
        </ul>
      </nav>
     
      <Routes>
        <Route index element={<ListUser />}></Route>
        <Route className='btn btn-primary' path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<EditUser />}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;


// import './App.css';
// import PostList from './API/PostList';

// function App(){
//   return(
//     <div className="App">
//       <PostList></PostList>
//     </div>
//   )
// }

// export default App;