// Login.js
import { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Button from '../shared/Button';
import ShowProfile from './ShowProfile';

const loginData = {
    username: 'john',
    password: '123',
};

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { state, dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        if (username === loginData.username && password === loginData.password) {
            dispatch({ type: 'LOGIN', payload: { username } });
        }
    };

    if (state.isAuthenticated) {
        return <ShowProfile />;
    }

    return (
        <>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username..."
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password..."
            />
            <Button handleFunction={handleLogin} text={'Login'} />
        </>
    );
}

export default Login;
