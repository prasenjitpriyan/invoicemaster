import useWindowDimensions from 'src/hooks/useWindowWidth';
import { useInvoices } from 'src/store/features/Invoice/useInvoices';
import styles from './PageControlsTextInfo.module.scss';

export const PageControlsTextInfo = () => {
  const { width } = useWindowDimensions();
  const invoices = useInvoices();

  return (
    <div className={styles.PageControlsTextInfo}>
      <h1 className={styles.PageControlsTextInfo__title}>Invoices</h1>
      <span className={styles.PageControlsTextInfo__qty}>
        {width <= 768 && invoices.length > 0
          ? `${invoices.length} invoices`
          : `There are ${invoices.length} total invoices`}
        {invoices.length === 0 && 'No Invoices'}
      </span>
    </div>
  );
};
