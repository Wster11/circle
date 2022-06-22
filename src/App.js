import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import Login from './layout/login/login'
import Main from './layout/main/main'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="login" />} />
        <Route path="login" index element={<Login />} />
        <Route exact path="main" element={<Main />} />
      </Routes>
    </div>
  );
}


export default App;
