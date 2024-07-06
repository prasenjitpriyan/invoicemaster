import { useField } from 'formik';
import styles from './InvoiceFormInputField.module.scss';
import IntrinsicElements = React.JSX.IntrinsicElements;

type inputProps = {
  placeholder: string;
  labelText: string;
  type: string;
  name: string;
} & IntrinsicElements['input'];

export const InvoiceFormInputField = ({
  placeholder,
  labelText,
  name,
  type,
  ...props
}: inputProps) => {
  const [field, meta] = useField<string | number>(name);

  return (
    <label className={styles.invoiceFormInputField} htmlFor={field.name}>
      <span className={styles.invoiceFormInputField__fieldCaption}>
        {labelText}
        {meta.error && meta.touched && (
          <span className={styles.invoiceFormInputField__error}>
            {meta.error}
          </span>
        )}
      </span>
      <input
        autoComplete="off"
        id={name}
        type={type}
        className={`${styles.invoiceFormInputField__inputField} ${meta.touched && meta.error ? styles.invoiceFormInputField__fieldError : ''}`}
        placeholder={placeholder}
        value={
          typeof field.value === 'number' && !field.name.includes('quantity')
            ? field.value.toFixed(2)
            : field.value
        }
        onChange={field.onChange}
        onBlur={field.onBlur}
        {...props}
      />
    </label>
  );
};
