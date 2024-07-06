import styles from './ConfirmModal.module.scss';

interface ConfirmModalProps {
  confirmHandler?: () => void;
  cancelHandler?: () => void;
}

export const ConfirmModal = ({
  confirmHandler,
  cancelHandler,
}: ConfirmModalProps) => {
  return (
    <div className={styles.confirmModal__wrapper}>
      <div className={styles.confirmModal__modal}>
        <h2 className={styles.confirmModal__header}>Confirm Deletion</h2>
        <p className={styles.confirmModal__text}>
          Are you sure you want to delete this invoice? This action cannot be
          undone.
        </p>
        <div className={styles.confirmModal__buttons}>
          <button
            className={styles.confirmModal__buttonCancel}
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button
            className={styles.confirmModal__buttonDelete}
            onClick={confirmHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
