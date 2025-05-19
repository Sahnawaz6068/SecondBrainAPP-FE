type Varient = "primary" | "secondary";

interface ButtonProp {
  varient: Varient;
  size: "sm" | "md" | "lg";
  startIcon?: any;
  endIcon?: any;
  text: String;
  onClick?: () => void;
}

const VarientStyle = {
  primary: "bg-blue-200 text-purple-800 hover:cursor-pointer hover:bg-blue-300 ",
  secondary: "bg-blue-700 text-white hover:cursor-pointer hover:bg-blue-600 dark:bg-purple-700 dark:hover:bg-purple-500",
};

const sizeStyle = {
  sm: "px-3 flex rounded-sm text-sm py-2",
  md: "px-4 py-1 flex rounded-md text-md",
  lg: "pl-4 pr-6 flex py-2 rounded-sm text-sm",
};


export const Button = (props: ButtonProp) => {
  return (
    <div className="mx-2 hover:scale-105 duration-200">
      <button onClick={props.onClick}
        className={`${VarientStyle[props.varient]}  ${sizeStyle[props.size]} `}
      >
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{" "}
        {props.text}
      </button>
    </div>
  );
};
