import { Route, Routes } from 'react-router-dom';
import AddBooks from './components/AddBooks';
import DisplayBooks from './components/DisplayBooks';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addbooks' element={<AddBooks/>}/>
        <Route path='/displayinfo' element={<DisplayBooks/>}/>
      </Routes>
   </>
  );
}

export default App;
