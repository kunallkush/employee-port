import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
