import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        console.log('email', email);
        console.log('password', password);

        // e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            console.log('Login Success:', response.data);
            setError(response.data?.sucess);

        } catch (err) {
            console.log('err', err.response);
            setError(err?.response.data?.error);
        }
    };

    return (
        <>
      <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p>{error}</p>}
            <button
                type="submit"
                onClick={() => {
                    handleSubmit()
                }}
            >Login</button>
    </>
  );
};

export default Login;
