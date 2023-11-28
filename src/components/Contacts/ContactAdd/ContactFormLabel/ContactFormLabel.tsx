import { ErrorMessage, Field } from 'formik';
import { FC } from 'react';
import css from './ContactFormLabel.module.scss';

interface ContactFormLabelProps {
  labelName: string;
  type: string;
  placeholder: string;
}

const ContactFormLabel: FC<ContactFormLabelProps> = ({
  labelName,
  type,
  placeholder,
}) => {
  const name = labelName.toLowerCase();
  return (
    <label className={css.label} htmlFor={name}>
      <p className={css.labelName}>{labelName}</p>
      <Field
        className={css.input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
      <ErrorMessage component="span" name={name} />
    </label>
  );
};

export default ContactFormLabel;
