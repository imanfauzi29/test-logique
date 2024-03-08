import { ImSpinner2 } from "react-icons/im";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  isLoading?: boolean;
}

const Button = ({ text, className, isLoading, ...rest }: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full rounded-full py-2.5 px-4 text-center flex items-center justify-center gap-2",
        className
      )}
      disabled={isLoading}
      {...rest}
    >
      {isLoading && <ImSpinner2 className="animate-spin" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
