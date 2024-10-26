import { useState } from 'react';
import { RiLockPasswordFill, RiUser2Fill } from 'react-icons/ri';
import { useLogin } from '@/hooks/Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  const {loginFn, isLoading} = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginFn({email, password})
    
  };


  return (
    <div className='p-3'>
      <div className='flex flex-col gap-3 items-center my-20 w-full h-[100vh] text-start'>
        <div className='w-full'>
          <p className='text-[40px] w-full'>Welcome Back</p>
          <p>Log in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className='auth'>
          <div className='flex items-center gap-2'>
            <RiUser2Fill />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full'
            />
          </div>

          <div className='flex items-center gap-2'>
            <RiLockPasswordFill />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full'
            />
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <p>Remember me</p>
            </div>

            <p className='text-blue-500 cursor-pointer'>Forgotten password</p>
          </div>

          <button type='submit' className='mt-4 bg-blue-500 text-white p-2 rounded'>
            {
                isLoading ?
                "Submitting..."
                :
                "Log in"
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
