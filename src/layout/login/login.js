
import './login.less';
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
            <span className='username'>用户名：<span className='aa'>username</span></span>
            <Button type="primary">Button</Button>
        </div>
    );
}

export default Login;