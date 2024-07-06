import arrowRightUrl from 'src/assets/icon-arrow-right.svg';
import { Invoice } from 'src/types';
import styles from './InvoiceCard.module.scss';

interface InvoiceCardProps
  extends Pick<
    Invoice,
    'id' | 'createdAt' | 'clientName' | 'total' | 'status'
  > {}

export const InvoiceCard = ({
  id,
  createdAt,
  clientName,
  total,
  status,
}: InvoiceCardProps) => {
  const getStatusClass = (status: string, mainElementClassName: string) => {
    if (status === 'paid') {
      return styles[`${mainElementClassName}--paid`];
    }
    if (status === 'pending') {
      return styles[`${mainElementClassName}--pending`];
    }
    if (status === 'draft') {
      return styles[`${mainElementClassName}--draft`];
    }
    return '';
  };

  return (
    <div className={styles.invoiceCard}>
      <h2 className={styles.invoiceCard__id}>
        <span className={styles.invoiceCard__hash}>#</span>
        {id}
      </h2>
      <p className={styles.invoiceCard__date}>{createdAt}</p>
      <p className={styles.invoiceCard__client}>{clientName}</p>
      <p className={styles.invoiceCard__total}>
        <span className={styles.invoiceCard__currency}>£ </span>
        {total.toFixed(2)}
      </p>

      <p
        className={`${styles.invoiceCard__status} ${getStatusClass(status, 'invoiceCard__status')}`}
      >
        <span
          className={`${styles.invoiceCard__status__indicator} ${getStatusClass(status, 'invoiceCard__status__indicator')}`}
        ></span>
        {status}
      </p>
      <img
        src={arrowRightUrl}
        className={styles.invoiceCard__arrowRight}
        alt="arrow right svg"
      />
    </div>
  );
};
