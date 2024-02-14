import { useState, FocusEvent, HTMLInputTypeAttribute, useEffect } from "react";

export default function Input({
  label,
  name,
  type,
  value = "",
  disabled,
  onBlur,
}: InputProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-zinc-200">
        {label}
      </label>
      <input
        title="input"
        autoComplete="off"
        name={name}
        type={type}
        value={localValue}
        disabled={disabled}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={onBlur}
        className="h-10 p-2 rounded-md bg-zinc-500 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 duration-100 transition-all"
      />
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  value: string | undefined;
  disabled?: boolean;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
}
