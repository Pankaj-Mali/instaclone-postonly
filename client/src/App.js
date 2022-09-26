import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Views from './components/view';
import Landing from './components/landing';
import Post from './components/post';
function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/postview' element={<Views/>}/>
       <Route path="/addPost" element={<Post/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
