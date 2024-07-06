import styles from './InvoiceFormItemDelBtn.module.scss';

interface InvoiceFormItemDelBtnProps {
  clickHandler?: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
}

export const InvoiceFormItemDelBtn = ({
  clickHandler,
  type,
}: InvoiceFormItemDelBtnProps) => {
  return (
    <button
      type={type}
      className={styles.invoiceFormItemDelBtn}
      onClick={clickHandler}
    ></button>
  );
};
