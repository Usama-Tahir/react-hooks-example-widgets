import React, { ReactElement, useState, useEffect, useRef } from 'react';
import { DropdownOption } from '../App';

interface Iprops {
  options: DropdownOption[];
  selected: DropdownOption;
  label: string;
  onSelectedChange: React.Dispatch<React.SetStateAction<DropdownOption>>;
}
const Dropdown: React.FC<Iprops> = ({
  options,
  selected,
  onSelectedChange,
  label,
}): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onBodyClick = (event: any) => {
      if (ref.current?.contains(event.target as Node)) {
        return;
      }
      setOpen(false);
      // cleanup function for removing event listener from body element
      return () => {
        document.body.removeEventListener('click', onBodyClick);
      };
    };
    document.body.addEventListener('click', onBodyClick);
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
