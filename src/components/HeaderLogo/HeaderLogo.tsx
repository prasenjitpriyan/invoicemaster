import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import style from './HeaderLogo.module.scss';

export const HeaderLogo = () => {
  return (
    <div className={style.headerLogo}>
      <Link to={import.meta.env.BASE_URL}>
        <img className={style.headerLogo__image} src={Logo} alt="logo image" />
      </Link>
    </div>
  );
};
