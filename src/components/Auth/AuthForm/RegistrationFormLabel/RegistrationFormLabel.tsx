import { ErrorMessage, Field } from 'formik';
import { FC } from 'react';
import css from './RegistrationFormLabel.module.scss';

interface RegistrationFormLabelProps {
  labelName: string;
  type: string;
  // name: string;
}

export const RegistrationFormLabel: FC<RegistrationFormLabelProps> = ({
  labelName,
  type,
  // name,
}) => {
  const name = labelName.toLowerCase();
  return (
    <label className={css.loginLabel} htmlFor={labelName}>
      <p className={css.labelName}>{labelName}</p>
      <Field className={css.input} type={type} name={name}></Field>
      <ErrorMessage name={name} />
    </label>
  );
};
