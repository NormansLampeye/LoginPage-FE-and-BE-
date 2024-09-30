import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [login, setLogin] = useState(false)

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            setLogin(true)
            setError(response.data?.sucess);
        } catch (err) {
            setLogin(false)
            setError(err?.response.data?.error);
        }
    };

    return (
        <div className='login-page'>
            <div className='login-comp'>
                <div className='wrapper'>
                    <div className='email'>
                        <label>Email :</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            onBlur={(e) => {

                            }}
                        />
                    </div>
                    <div className='password'>
                        <label style={{ right: '24px' }}>Password :</label>
                        <input
                            style={{
                                right: '14px',
                                position: 'relative'
                            }}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            onBlur={(e) => {

                            }}
                        />
                    </div>
                    {error && <p className={login ? 'okMsg' : 'errMsg'}>{error}</p>}
                    <button
                        type="submit"
                        onClick={() => {
                            handleSubmit()
                        }}
                    >Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
