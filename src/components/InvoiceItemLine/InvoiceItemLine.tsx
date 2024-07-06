import styles from './InvoiceItemLine.module.scss';

interface InvoiceItemLineProps {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export const InvoiceItemLine = ({
  name,
  quantity,
  price,
  total,
}: InvoiceItemLineProps) => {
  return (
    <div className={styles.invoiceItemLine}>
      <h3 className={styles.invoiceItemLine__name}>{name}</h3>
      <div className={styles.invoiceItemLine__paramsMobile}>
        <span className={styles.invoiceItemLine__qtyM}>{quantity}</span>
        <span className={styles.invoiceItemLine__markM}> x </span>
        <span className={styles.invoiceItemLine__priceM}>
          £ {Number(price).toFixed(2)}
        </span>
      </div>
      <span className={styles.invoiceItemLine__qty}>{quantity}</span>
      <span className={styles.invoiceItemLine__mark}> x </span>
      <span className={styles.invoiceItemLine__price}>
        £ {Number(price).toFixed(2)}
      </span>
      <div className={styles.invoiceItemLine__total}>£ {total.toFixed(2)}</div>
    </div>
  );
};
