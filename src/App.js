import { Routes, Route } from 'react-router-dom';
import './App.css';
// import { Home } from '@/pages/home'
// import { Layout } from '@/pages/components/layout'
// import { Test } from '@/pages/test'
import { Home, Test, Layout } from '@/pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
