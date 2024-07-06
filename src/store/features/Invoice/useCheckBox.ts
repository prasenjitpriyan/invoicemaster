import { useAppDispatch, useAppSelector } from 'src/store/redux-hooks';
import { checkBoxName, toggleCheckbox } from './InvoiceSlice';
import { selectControlsChecked } from './invoiceSelectors';

export const useCheckBox = (
  name: checkBoxName,
  // eslint-disable-next-line no-unused-vars
): [{ name: checkBoxName; checked: boolean }, (name: checkBoxName) => void] => {
  const dispatch = useAppDispatch();
  const controlsChecked = useAppSelector((state) =>
    selectControlsChecked(state, name),
  ) || { name, checked: false };

  const handleCheckBox = (name: checkBoxName) => {
    dispatch(toggleCheckbox(name));
  };

  return [controlsChecked, handleCheckBox];
};
