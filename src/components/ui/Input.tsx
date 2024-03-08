import { cn } from "../../utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  onInputChange?: (value: string) => void;
}

const Input = ({ className, onInputChange, ...rest }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    onInputChange && onInputChange(value);
  };
  return (
    <input
      type="text"
      className={cn(
        "rounded-full py-2.5 px-4 text-center text-gray-500 bg-white w-full focus:outline-none focus:ring-purple-300 focus:ring-2",
        className
      )}
      onChange={handleInputChange}
      {...rest}
    />
  );
};

export default Input;
