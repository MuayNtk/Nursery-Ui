import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      window.location.href = '/dashboard';
    } else {
      setError('Invalid username or password');
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
