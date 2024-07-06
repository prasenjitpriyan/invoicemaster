import styles from './InvoiceEditBtn.module.scss';

interface InvoiceEditBtnProps {
  text: string;
  clickHandler?: () => void;
}

export const InvoiceEditBtn = ({ text, clickHandler }: InvoiceEditBtnProps) => {
  return (
    <button className={styles.invoiceEditBtn} onClick={clickHandler}>
      {text}
    </button>
  );
};
