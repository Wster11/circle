import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'
import Login from "./layout/login/login";
import Main from "./layout/main/main";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" index element={<Login />} />
          <Route exact path="main" element={<Main />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
