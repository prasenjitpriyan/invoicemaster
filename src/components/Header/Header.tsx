import urlAvatar from '../../assets/image-avatar.jpg';
import { HeaderAvatar } from '../HeaderAvatar';
import { HeaderLogo } from '../HeaderLogo';
import { ThemeSwitcher } from '../ThemeSwitcher';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <HeaderLogo />
      </div>
      <div className={styles.header__switcher}>
        <ThemeSwitcher />
      </div>
      <HeaderAvatar url={urlAvatar} />
    </header>
  );
};
