import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../../redux/selectors';
import Button from '../../Button/Button';
import CircularIndeterminate from '../../CircularProgress/CircularProgress';

const AuthButton = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Button form={'authForm'} buttonType={'submit'}>
      Send
      <CircularIndeterminate conditions={isLoading} />
    </Button>
  );
};

export default AuthButton;
