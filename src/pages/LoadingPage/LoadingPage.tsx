import { Header } from 'components/Header';
import styles from './LoadingPage.module.scss';

export const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.loaderBlock}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};
