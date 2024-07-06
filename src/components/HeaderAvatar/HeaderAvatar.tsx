import styles from './HeaderAvatar.module.scss';

interface HeaderAvatarProps {
  url: string;
}

export const HeaderAvatar = ({ url }: HeaderAvatarProps) => {
  return (
    <div className={styles.headerAvatar}>
      <img
        src={url}
        className={styles.headerAvatar__image}
        alt="avatar image"
      />
    </div>
  );
};
