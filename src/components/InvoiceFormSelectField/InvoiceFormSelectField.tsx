import { useField } from 'formik';
import { useEffect } from 'react';
import Select, { SingleValue } from 'react-select';
import styles from './InvoiceFormSelectField.module.scss';
import IntrinsicElements = React.JSX.IntrinsicElements;

type InvoiceFormSelectFieldProps = {
  name: string;
  labelText: string;
} & IntrinsicElements['select'];

type Option = {
  value: number;
  label: string;
};

export const InvoiceFormSelectField = ({
  name,
  labelText,
}: InvoiceFormSelectFieldProps) => {
  const [field, _, helpers] = useField<number>(name);
  const options: Option[] = [
    { value: 1, label: 'Next 1 Day' },
    { value: 7, label: 'Next 7 Days' },
    { value: 14, label: 'Next 14 Days' },
    { value: 30, label: 'Next 30 Days' },
  ];

  useEffect(() => {
    helpers.setValue(options[0].value);
  }, []);

  const changeValue = (newValue: SingleValue<Option>) => {
    if (newValue) {
      helpers.setValue(newValue.value);
    }
  };

  return (
    <div className={styles.invoiceFormSelectField}>
      <span className={styles.invoiceFormSelectField__fieldCaption}>
        {labelText}
      </span>
      <Select
        className={styles.invoiceFormSelectField__inputField}
        defaultValue={
          options.find((opt) => opt.value === field.value) ?? options[0]
        }
        options={options}
        onChange={changeValue}
        name={field.name}
      />
    </div>
  );
};
