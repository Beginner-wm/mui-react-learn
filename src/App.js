import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, TestForm, Layout, Test, MyImageList, CheckoutBoxGroup, ReactHookFormLearn,TestReduxToolkit } from '@/pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='testForm' element={<TestForm />} />
          <Route path='test' element={<Test />} />
          <Route path='imageList' element={<MyImageList />} />
          <Route path='checkoutBoxGroup' element={<CheckoutBoxGroup />} />
          <Route path='reactHookFormLearn' element={<ReactHookFormLearn />} />
          <Route path='testReduxToolkit' element={<TestReduxToolkit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
