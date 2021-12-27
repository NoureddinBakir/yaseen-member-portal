import '../styles/Login.css';
import logo from '../images/logo-name.svg';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
    let navigate = useNavigate();

    return (
        <div className="LoginClass">
            <div className="Login">
                <img className="LoginImg" src={logo} />
                <h4>Login to manage your account</h4>
                <form className="LoginForm">
                    <label className="form-label">
                        <input className="form-input" name="username" type="text" placeholder="Email" />
                    </label>
                    <label className="form-label">
                        <input className="form-input" name="password" type="text" placeholder="Password" />
                    </label>
                    <button type="submit" className="loginButton" 
                    onClick={()=>{
                        Cookies.set('authToken', true, {expires: 7});
                        navigate("/");
                        }}>Login</button>
                </form>
            </div>
        </div>
    )
};

export default Login;