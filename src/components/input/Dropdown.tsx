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

  return (
    <select
      name={name}
      className="px-2 py-1 bg-transparent border-2 border-border rounded-full body-md text-neutral-900"
      onChange={onChange}
    >
      {
        data.map((item, index) => {
          return (
            <option key={index} value={item.value}>{item.label}</option>
          );
        })
      }
    </select>
  );
};

export default Dropdown;