import { Routes, Route } from 'react-router-dom';
import Tracker from './components/Tracker';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

  const style = {
    color:'Gold',
    margin:'200px',
    height: '50px',
    width: '490px',
    marginLeft:'33.33%',
    // marginTop:'33.33%'
  }
  //render layout- header-navbar content-main and tracker and footer
  return (
    <div className="App">
    <Navbar />
    <h1 style={style}> Welcome To Habit Tracker</h1>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/progress' element={<Tracker />} />
    </Routes>
  </div>
  );
}

export default App;