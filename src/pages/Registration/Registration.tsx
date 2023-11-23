import AuthBlock from '../../components/Auth/AuthBlock/AuthBlock';
import AuthForm from '../../components/Auth/AuthForm/AuthForm';
import { AuthFormLabel } from '../../components/Auth/AuthForm/AuthFormLabel/AuthFormLabel';

const Registration = () => {
  return (
    <AuthBlock
      title={'Lets Sign You Up'}
      paragraph={'We welcome to our application'}
    >
      <AuthForm authType={'registration'}>
        <AuthFormLabel labelName={'Name'} type={'text'} />
        <AuthFormLabel labelName={'Email'} type={'email'} />
        <AuthFormLabel labelName={'Password'} type={'password'} />
      </AuthForm>
    </AuthBlock>
  );
};

export default Registration;
