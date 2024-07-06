import { useField, useFormikContext } from 'formik';
import { useEffect } from 'react';
import { InvoiceFormValues } from 'src/types';
import styles from './InvoiceFormTotalField.module.scss';
import IntrinsicElements = React.JSX.IntrinsicElements;

type inputProps = {
  placeholder: string;
  labelText: string;
  type: string;
  name: string;
  index: number;
} & IntrinsicElements['input'];

export const InvoiceFormTotalField = ({
  placeholder,
  labelText,
  name,
  type,
  index,
  ...props
}: inputProps) => {
  const {
    values: { invoiceItems },
    setFieldValue,
  } = useFormikContext<InvoiceFormValues>();
  const [field] = useField<string | number>(name);

  useEffect(() => {
    if (invoiceItems[index].quantity || invoiceItems[index].price) {
      setFieldValue(
        name,
        Number(`${invoiceItems[index].quantity * invoiceItems[index].price}`),
      );
    }
  }, [invoiceItems[index].quantity, invoiceItems[index].price]);

  return (
    <label className={styles.invoiceFormTotalField} htmlFor={field.name}>
      <span className={styles.invoiceFormTotalField__fieldCaption}>
        {labelText}
      </span>
      <input
        disabled
        autoComplete="off"
        id={name}
        type={type}
        className={styles.invoiceFormTotalField__inputField}
        placeholder={placeholder}
        value={Number(field.value).toFixed(2)}
        onChange={field.onChange}
        onBlur={field.onBlur}
        {...props}
      />
    </label>
  );
};
