import { AuthProvider } from './Contexts/AuthContext';
import Login from './pages/Login';

function App() {
    return (
        <AuthProvider>
            <Login />
        </AuthProvider>
    );
}

export default App;
