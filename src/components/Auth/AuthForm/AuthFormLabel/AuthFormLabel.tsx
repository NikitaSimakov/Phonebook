import { ErrorMessage, Field } from 'formik';
import { FC } from 'react';
import css from './AuthFormLabel.module.scss';

interface AuthFormLabelProps {
  labelName: string;
  type: string;
}

export const AuthFormLabel: FC<AuthFormLabelProps> = ({ labelName, type }) => {
  const name = labelName.toLowerCase();
  return (
    <label className={css.loginLabel} htmlFor={name}>
      <p className={css.labelName}>{labelName}</p>
      <Field className={css.input} type={type} name={name} id={name}></Field>
      <ErrorMessage name={name} />
    </label>
  );
};
