import useWindowDimensions from 'src/hooks/useWindowWidth';
import iconPlus from '../../assets/icon-plus.svg';
import styles from './PageControlButton.module.scss';

interface PageControlButtonprops {
  openPageHandler: () => void;
}

export const PageControlButton = ({
  openPageHandler,
}: PageControlButtonprops) => {
  const { width } = useWindowDimensions();
  return (
    <button className={styles.pageControlButton} onClick={openPageHandler}>
      <div className={styles.pageControlButton__icon}>
        <img
          className={styles.pageControlButton__iconImg}
          src={iconPlus}
          alt="plus icon"
        />
      </div>
      {width <= 768 ? 'New' : 'New Invoice'}
    </button>
  );
};
