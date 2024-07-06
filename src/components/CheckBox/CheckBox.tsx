import { ChangeEvent, ReactNode, Ref, forwardRef } from 'react';
import { checkBoxName } from 'src/store/features/Invoice/InvoiceSlice';
import { useCheckBox } from 'src/store/features/Invoice/useCheckBox';
import styles from './CheckBox.module.scss';

interface CheckBoxProps {
  name: checkBoxName;
  ref: Ref<HTMLInputElement> | null;
  children: ReactNode;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ name, children }, ref) => {
    const [controlsChecked, setChecked] = useCheckBox(name);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setChecked(name);
      } else {
        setChecked(name);
      }
    };

    return (
      <div className={styles.checkBox}>
        <input
          ref={ref}
          type="checkbox"
          id={`${name}-checkbox`}
          className={styles.checkBox__input}
          name={controlsChecked.name}
          checked={controlsChecked.checked}
          onChange={changeHandler}
        />
        <label htmlFor={`${name}-checkbox`}>{children}</label>
      </div>
    );
  },
);
