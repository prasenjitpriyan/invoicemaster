import { InvoiceForm } from 'components/InvoiceForm';
import { AnimatePresence, motion } from 'framer-motion';
import arrowLeftIconUrl from 'src/assets/icon-arrow-left.svg';
import { Invoice } from 'src/types';
import styles from './InvoiceEditPage.module.scss';

interface InvoiceEditPageProps {
  invoice: Invoice;
  isShown: boolean;
  closeHandler: () => void;
}

export const InvoiceEditPage = ({
  invoice,
  isShown,
  closeHandler,
}: InvoiceEditPageProps) => {
  return (
    <AnimatePresence>
      {isShown && (
        <>
          <motion.div
            className={styles.invoiceEditPageWrapper}
            initial={{ left: '-100%' }}
            animate={{ left: '0' }}
            exit={{ left: '-100%' }}
            transition={{ duration: 0.1 }}
          ></motion.div>
          <motion.div
            className={styles.invoiceEditPage}
            initial={{ left: '-100%' }}
            animate={{ left: '0' }}
            exit={{ left: '-100%' }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.invoiceEditPage__layer}>
              <section className={styles.invoiceEditPage__backLinks}>
                <span
                  className={styles.invoiceEditPage__backLink}
                  onClick={closeHandler}
                >
                  <img
                    src={arrowLeftIconUrl}
                    alt="arrow left"
                    className={styles.invoiceEditPage__backLinkImage}
                  />
                  Go back
                </span>
              </section>
              <h1 className={styles.invoiceEditPage__heading}>
                Edit <span className={styles.hash}>#</span>
                {invoice.id}
              </h1>
              <div className={styles.invoiceEditPage__form}>
                <InvoiceForm
                  invoice={invoice}
                  cancelChangesHandler={closeHandler}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
