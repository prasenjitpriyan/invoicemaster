import { InvoiceForm } from 'components/InvoiceForm';
import { AnimatePresence, motion } from 'framer-motion';
import arrowLeftIconUrl from 'src/assets/icon-arrow-left.svg';
import styles from './NewInvoicePage.module.scss';

interface NewInvoicePageProps {
  isShown: boolean;
  closeHandler: () => void;
}
export const NewInvoicePage = ({
  isShown,
  closeHandler,
}: NewInvoicePageProps) => {
  return (
    <AnimatePresence>
      {isShown && (
        <>
          <motion.div
            className={styles.newInvoicePageWrapper}
            initial={{ left: '-100%' }}
            animate={{ left: '0' }}
            exit={{ left: '-100%' }}
            transition={{ duration: 0.1 }}
          ></motion.div>
          <motion.div
            className={styles.newInvoicePage}
            initial={{ left: '-100%' }}
            animate={{ left: '0' }}
            exit={{ left: '-100%' }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.newInvoicePage__layer}>
              <section className={styles.newInvoicePage__backLinks}>
                <span
                  className={styles.newInvoicePage__backLink}
                  onClick={closeHandler}
                >
                  <img
                    src={arrowLeftIconUrl}
                    alt="arrow left"
                    className={styles.newInvoicePage__backLinkImage}
                  />
                  Go back
                </span>
              </section>
              <h1 className={styles.newInvoicePage__heading}>New Invoice</h1>
              <div className={styles.newInvoicePage__form}>
                <InvoiceForm cancelChangesHandler={closeHandler} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
