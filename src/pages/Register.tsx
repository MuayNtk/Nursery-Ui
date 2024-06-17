import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [password1, setPassword1] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  const handleRegister = () => {
    // Add your registration logic here
    console.log('Name:', name);
    console.log('Lastname:', lastname);
    console.log('Position:', position);
    console.log('Email:', email);
    console.log('Tel:', tel);
    console.log('Password 1:', password1);
    console.log('Password 2:', password2);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 bg-gray-200 rounded-lg shadow-md">
        <p className="text-center mb-5 text-sky-950 font-bold  text-2xl">
          アカウントを登録する
        </p>
        <div>
          <div className="flex mb-4 space-x-4">
            <TextField
              label="名前"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4"
              size="small"
            />
            <TextField
              label="苗字"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="mb-4"
              size="small"
            />
          </div>
          <div className="flex mb-4 space-x-4">
            <TextField
              label="役割"
              variant="outlined"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="mb-4"
              size="small"
            />
            <TextField
              label="電話番号"
              variant="outlined"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="mb-4"
              size="small"
            />
          </div>
          <div className="flex mb-4">
            <TextField
              label="メールアドレス"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
              size="small"
            />
          </div>
          <div className="flex mb-4 space-x-4">
            <TextField
              label="パースワード"
              type="password"
              variant="outlined"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              className="m-1"
              size="small"
            />
            <TextField
              label="パースワード確認"
              type="password"
              variant="outlined"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="m-1"
              size="small"
            />
          </div>
          <div className="flex justify-between">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {}}
            >
              ยกเลิก
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              メンバー登録
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
