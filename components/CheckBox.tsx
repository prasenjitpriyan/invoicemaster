import React from "react";
import { ChangeEvent, ReactNode, Ref, forwardRef } from "react";
import { checkBoxName } from "@/lib/features/Invoice/InvoiceSlice";
import { useCheckBox } from "@/lib/features/Invoice/useCheckBox";

interface CheckBoxProps {
  name: checkBoxName;
  ref: Ref<HTMLInputElement> | null;
  children: ReactNode;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, children }, ref) => {
  const [controlsChecked, setChecked] = useCheckBox(name);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setChecked(name);
    } else {
      setChecked(name);
    }
  };
  return (
    <div className="flex">
      <input
        ref={ref}
        type="checkbox"
        id={`${name}-checkbox`}
        className=""
        name={controlsChecked.name}
        checked={controlsChecked.checked}
        onChange={changeHandler}
      />
      <label htmlFor={`${name}-checkbox`}>{children}</label>
    </div>
  );
};

export default CheckBox;
