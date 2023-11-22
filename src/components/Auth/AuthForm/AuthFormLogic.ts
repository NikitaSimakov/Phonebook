import * as yup from 'yup';
import { loginThunk, signUpThunk } from '../../../redux/auth/thunks';
import { FormValuesInterface } from '../models/models';

export const useSelectInititialValues = (type: string) => {
  switch (type) {
    case 'registration':
      return { name: '', email: '', password: '' };
    default:
      return { email: '', password: '' };
  }
};
export const useSelectSchema = (type: string) => {
  switch (type) {
    case 'registration':
      return yup.object().shape({
        name: yup.string().min(2).required(),
        email: yup.string().email().required(),
        password: yup
          .string()
          .required('Please Enter your password')
          .password(),
      });
    case 'login':
      return yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required('Please Enter your password'),
      });
  }
};
export const useSelectHandleDispatch = (
  values: FormValuesInterface,
  type: string
) => {
  const thunk = () =>
    type === 'registration' ? signUpThunk(values) : loginThunk(values);

  const dispatcher = (dispatch: Function) => dispatch(thunk());
  return { dispatcher };
};
