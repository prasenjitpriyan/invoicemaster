import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/store/redux-hooks';
import { Theme } from 'src/types';
import { selectTheme } from './ThemeSelectors';
import { setTheme } from './ThemeSlice';

export const useTheme = (): [Theme, () => void] => {
  const theme = useSelector(selectTheme);
  const dispatch = useAppDispatch();

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    const handleSystemThemeChange = () => {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      dispatch(setTheme(systemTheme));
    };
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleSystemThemeChange);
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleSystemThemeChange);
    };
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};
