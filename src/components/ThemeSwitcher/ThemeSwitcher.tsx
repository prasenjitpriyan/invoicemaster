import MoonIcon from 'src/assets/icon-moon.svg';
import SunIcon from 'src/assets/icon-sun.svg';
import { useTheme } from 'src/store/features/Theme/useTheme';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme();
  };

  return (
    <div onClick={toggleTheme} className={styles.themeSwitcher}>
      {theme === 'dark' ? (
        <img src={MoonIcon} alt="switcher moon icon" />
      ) : (
        <img src={SunIcon} alt="switcher sun icon" />
      )}
    </div>
  );
};
