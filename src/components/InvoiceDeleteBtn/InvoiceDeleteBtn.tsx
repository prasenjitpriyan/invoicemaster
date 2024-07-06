import styles from './InvoiceDeleteBtn.module.scss';

interface InvoiceDeleteBtnProps {
  text: string;
  clickHandler?: () => void;
}

export const InvoiceDeleteBtn = ({
  text,
  clickHandler,
}: InvoiceDeleteBtnProps) => {
  return (
    <button className={styles.invoiceDeleteBtn} onClick={clickHandler}>
      {text}
    </button>
  );
};
