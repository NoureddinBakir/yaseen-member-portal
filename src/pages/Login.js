import '../styles/Login.css';
import logo from '../images/logo-name.svg';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';

function Login() {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className="LoginClass">
            <div className="Login">
                <img className="LoginImg" src={logo} />
                <h4>Login to manage your account</h4>

                <form className="LoginForm"
                    onSubmit={handleSubmit((data) => {
                        console.log(data);
                        Cookies.set('authToken', true, {expires: 7});
                        navigate('/');
                    })}>

                    <input className="form-input"
                        {...register("username", { required: "Please enter your email" })}
                        type="text" placeholder="Email" />

                    <input className="form-input"
                        {...register("password", { required: "Please enter your password" })}
                        type="text" placeholder="Password" />

                    <input type="submit" />
                </form>
            </div>
        </div>
    )
};

export default Login;