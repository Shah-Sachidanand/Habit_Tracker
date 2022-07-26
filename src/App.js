import { Routes, Route } from 'react-router-dom';
import Tracker from './components/Tracker';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

  //render layout- header-navbar content-main and tracker and footer
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/progress' element={<Tracker />} />
    </Routes>
  </div>
  );
}

export default App;