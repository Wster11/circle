
import './login.css';
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

function Login() {
    let navigate = useNavigate();
    const login = () => {
        navigate("/main")
    }
    return (
        <div className="login" onClick={login}>
            login
            
            <Button type="primary">Button</Button>
        </div>
    );
}

export default Login;