import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from './pages/home'
// import { Home } from '@/pages/home'
import { Test } from './pages/test'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='test' element={<Test />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
