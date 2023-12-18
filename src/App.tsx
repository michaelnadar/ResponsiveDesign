// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './Test';
import Price from './Price';

const App:React.FC = () => {
  return (
    <Router>
  <Routes>
       <Route path="/"  element={<Test/>} />
       <Route path='/price' element={<Price/>}/>
  </Routes>
 </Router>
  );
};

export default App;
