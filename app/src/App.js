import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';


function App() {
  return (
    <>    
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Chat" element={<Chat/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
