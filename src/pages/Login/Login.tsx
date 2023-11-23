import AuthBlock from '../../components/Auth/AuthBlock/AuthBlock';
import AuthForm from '../../components/Auth/AuthForm/AuthForm';
import { AuthFormLabel } from '../../components/Auth/AuthForm/AuthFormLabel/AuthFormLabel';

const Login = () => {
  return (
    <AuthBlock
      title={'Let’s Sign You In'}
      paragraph={'Welcome back, you’ve been missed!'}
    >
      <AuthForm authType={'login'}>
        <AuthFormLabel labelName={'Email'} type={'email'} />
        <AuthFormLabel labelName={'Password'} type={'password'} />
      </AuthForm>
    </AuthBlock>
  );
};

export default Login;
