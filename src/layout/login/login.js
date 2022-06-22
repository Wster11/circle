import s from './login.module.less';
import { useNavigate } from 'react-router-dom'
import { Input, Button } from 'antd';

export const EyeIcon = ()=>{
    return (
        <div className='eye-icon'></div>
    )
}
export const EyeSlashIcon = ()=>{
    return (
        <div className='eye-slash'></div>
    )
}

function Login() {
    let navigate = useNavigate();
    const login = () => {
        navigate("/main")
    }
    const onChange = (e) => {
        console.log(e);
    };
    const LOGIN = {
        loginText: '登录环信超级社区',
        usernamePlaceHolder: '请输入您的手机号',
        passwordPlaceHolder: '请输入密码',
        login: '登录',
    };
    return (
        <div className="login-container">
            <div className='login-layout'>
                <div className={s.loginIcon}></div>
                <div className='login-text'>{LOGIN.loginText}</div>
                <div className='login-main'>
                    <Input className='username-input' placeholder={LOGIN.usernamePlaceHolder} allowClear={{ clearIcon: <div className='clearIcon'></div> }} maxLength={11} onChange={onChange} />
                    <Input.Password className='password-input' placeholder={LOGIN.passwordPlaceHolder} iconRender={(visible) => (visible ? <EyeIcon/>: <EyeSlashIcon/>)} />
                    <div className='login-button login-disable'>{LOGIN.login}</div>
                </div>
            </div>

            {/* <Button type="primary" onClick={login}>Button</Button> */}
        </div>
    );
}

export default Login;