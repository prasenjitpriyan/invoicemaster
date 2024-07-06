import { useState } from 'react';
import useWindowDimensions from 'src/hooks/useWindowWidth';
import arrowDown from '../../assets/icon-arrow-down.svg';
import { CheckBox } from '../CheckBox';
import styles from './PageControlSelect.module.scss';

export const PageControlSelect = () => {
  const { width } = useWindowDimensions();
  const [shown, setShown] = useState(false);

  const toggle = () => {
    setShown(!shown);
  };

  return (
    <div className={styles.pageControlSelect}>
      <div className={styles.pageControlSelect__heading} onClick={toggle}>
        {width <= 768 ? 'Filter' : 'Filter by status'}
        <img
          src={arrowDown}
          alt="arrow icon"
          className={styles.pageControlSelect__arrow}
          style={{
            transition: 'all 0.3s',
            transform: `${shown ? 'rotate(180deg)' : ''}`,
          }}
        />
      </div>
      {shown && (
        <div className={styles.pageControlSelect__chooseSection}>
          <span className={styles.pageControlSelect__chooseSection__checkBox}>
            <CheckBox name="draft">Draft</CheckBox>
          </span>
          <span className={styles.pageControlSelect__chooseSection__checkBox}>
            <CheckBox name="pending">Pending</CheckBox>
          </span>
          <span className={styles.pageControlSelect__chooseSection__checkBox}>
            {' '}
            <CheckBox name="paid">Paid</CheckBox>
          </span>
        </div>
      )}
    </div>
  );
};
