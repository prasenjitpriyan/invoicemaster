import { useField } from 'formik';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './InvoiceFormDateField.module.scss';
import IntrinsicElements = React.JSX.IntrinsicElements;

type inputProps = {
  labelText: string;
  name: string;
} & IntrinsicElements['input'];

export const InvoiceFormDateField = ({ labelText, name }: inputProps) => {
  const [field, meta, helpers] = useField<Date>(name);

  const handleChange = (value: Date) => {
    helpers.setValue(value);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  return (
    <label className={styles.invoiceFormDateField} htmlFor={field.name}>
      <span className={styles.invoiceFormDateField__fieldCaption}>
        {labelText}
      </span>
      <DatePicker
        popperPlacement="top-start"
        showYearDropdown
        showMonthDropdown
        showIcon={false}
        onKeyDown={keyDownHandler}
        name={field.name}
        id={field.name}
        wrapperClassName={styles.invoiceFormDateField__inputField}
        popperClassName={styles.invoiceFormDateField__dateModal}
        dateFormat="YYYY-MM-dd"
        onChange={handleChange}
        selected={meta.value ?? new Date(Date.now())}
      />
    </label>
  );
};
