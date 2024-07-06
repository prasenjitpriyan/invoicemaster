import { Header } from 'src/components/Header';
import { NoInfoPage } from 'src/components/NoInfoPage';
import styles from './Page404.module.scss';

export const Page404 = () => {
  return (
    <section className={styles.page404}>
      <div className={styles.header}>
        <Header />
      </div>
      <NoInfoPage />
    </section>
  );
};
