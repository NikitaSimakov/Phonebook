import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../../redux/selectors';
import { Button } from '../../Button/Button';
import CircularIndeterminate from '../../CircularProgress/CircularProgress';
import css from './AuthButton.module.scss';

const AuthButton = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Button buttonType={'submit'}>
      Send
      {isLoading && (
        <div className={css.loginLoading}>{CircularIndeterminate()}</div>
      )}
    </Button>
  );
};

export default AuthButton;
