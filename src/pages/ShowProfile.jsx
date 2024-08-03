import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const ShowProfile = () => {
    const { state, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <div>
            <h1>Welcome, {state.user.username}!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default ShowProfile;
