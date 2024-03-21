/* eslint-disable react-hooks/exhaustive-deps */
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Home, LandingPage, LayoutHome} from './View/indexView';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LayoutHome />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
