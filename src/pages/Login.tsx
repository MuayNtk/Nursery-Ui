import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | undefined>('');

  const handleLogin = () => {
    try {
      const user = login(username, password);
      if (user) {
        localStorage.setItem('username', user.username);
        localStorage.setItem('role', user.role); // Store role in localStorage
        window.location.href = '/dashboard'; // Redirect to dashboard or handle success
      }
    } catch (error: any) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-gray-200 rounded-lg shadow-md md:w-96 w-full max-w-md">
        <p className="text-center mb-5 text-sky-950 font-bold text-2xl">
          ロッグインする
        </p>

        {error && (
          <p className="text-center text-red-600 mb-4">{error}</p>
        )}

        <div className="mb-4">
          <TextField
            label="ユーザーID"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            size="small"
          />
        </div>
        <div className="mb-4">
          <TextField
            label="パースワード"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          ログイン
        </Button>
        <div className="mt-4">
          <p className="text-center text-sky-950">
            アカウントを登録する？<span className="underline">こちらに</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
