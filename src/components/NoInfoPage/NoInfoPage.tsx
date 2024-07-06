import { Link } from 'react-router-dom';
import imageUrl from '../../assets/illustration-empty.svg';
import styles from './NoInfoPage.module.scss';

interface NoInfoPageProps {
  text?: string;
}

export const NoInfoPage = ({ text }: NoInfoPageProps) => {
  return (
    <div className={styles.noInfoPage}>
      <img src={imageUrl} alt="No info" className={styles.noInfoPage__image} />
      <h1 className={styles.noInfoPage__heading}>There is nothing here</h1>
      <p className={styles.noInfoPage__text}>
        {text ? (
          <p>
            Create an invoice by clicking the <br></br> New button and get
            started
          </p>
        ) : (
          'Please return to the main page.'
        )}
      </p>
      {!text && (
        <Link to={import.meta.env.BASE_URL} className={styles.noInfoPage__link}>
          Return
        </Link>
      )}
    </div>
  );
};
