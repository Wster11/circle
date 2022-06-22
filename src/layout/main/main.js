
import './main.css';
import { useNavigate } from 'react-router-dom'

function Main() {
    let navigate = useNavigate();
    const goBack = () =>{
        navigate('/login')
    }
    return (
        <div className="main">
            主页面
            <p onClick={goBack}>返回</p>
        </div>

    );
}

export default Main;