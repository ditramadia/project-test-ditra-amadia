import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface dataType {
  value: string;
  label: string;
}

interface DropdownProps {
  name: string,
  data: dataType[],
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

const Dropdown = (props: DropdownProps) => {
  const { name, data, onChange } = props;

  const ref = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div 
      className={`relative border-2 ${isFocused ? 'border-neutral-900' : 'border-border'} rounded-full flex justify-between items-center cursor-pointer`}
    >
      <select
        ref={ref}
        name={name}
        className="appearance-none outline-none px-4 pr-8 py-1 bg-transparent body-md text-neutral-900 cursor-pointer lg:px-4 lg:pr-12"
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {
          data.map((item, index) => {
            return (
              <option key={index} value={item.value}>{item.label}</option>
            );
          })
        }
      </select>
      <FontAwesomeIcon icon={faCaretDown} className="absolute right-2 text-neutral-900 body-md pointer-events-none" />
    </div>
  );
};

export default Dropdown;