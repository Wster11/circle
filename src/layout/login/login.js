
import './login.css';
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate();
    const login = () => {
        navigate("/main")
    }
    return (
        <div className="login" onClick={login}>
            login
        </div>
    );
}

export default Login;