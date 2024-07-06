import { AnimatePresence } from 'framer-motion';
import { useCallback, useState } from 'react';
import { Header } from 'src/components/Header';
import { InvoicesPalette } from 'src/components/InvoicesPalette';
import { PageControls } from 'src/components/PageControls';
import { NewInvoicePage } from 'src/pages/NewInvoicePage';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const [isNewInvoicePageShown, setIsNewInvoicePageShown] = useState(false);

  const toggleNewInvoicePage = useCallback(() => {
    setIsNewInvoicePageShown((prev) => !prev);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <main className={styles.mainPage}>
        <div className={styles.header}>
          <Header />
        </div>
        <NewInvoicePage
          isShown={isNewInvoicePageShown}
          closeHandler={toggleNewInvoicePage}
        />
        <div className={styles.mainPage__controls}>
          <PageControls openPageNewHandler={toggleNewInvoicePage} />
          <div className={styles.mainPage__cards}>
            <InvoicesPalette />
          </div>
        </div>
      </main>
    </AnimatePresence>
  );
};
