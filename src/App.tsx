// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './Test';

const App:React.FC = () => {
  return (
    <Router>
  <Routes>
       <Route path="/"  element={<Test/>} />
  </Routes>
 </Router>
  );
};

export default App;
