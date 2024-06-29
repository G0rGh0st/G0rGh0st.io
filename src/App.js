import Head3r from './c0mp0nents/Head3r/Head3r';
import H0m3 from './c0mp0nents/H0m3/H0m3';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Head3r/>
        <Routes>
          <Route path='/' element={<H0m3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
