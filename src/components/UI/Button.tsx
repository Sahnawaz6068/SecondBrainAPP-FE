type Varient = "primary" | "secondary";

interface ButtonProp {
  varient: Varient;
  size: "sm" | "md" | "lg";
  startIcon?: any;
  endIcon?: any;
  text: String;
  onClick: () => void;
}

const VarientStyle = {
  primary: "bg-blue-100 text-purple-800",
  secondary: "bg-blue-700 text-white",
};

const sizeStyle = {
  sm: "px-3 flex rounded-sm text-sm py-2",
  md: "px-4 py-1 flex rounded-md text-md",
  lg: "pl-4 pr-6 flex py-2 rounded-sm text-sm",
};

export const Button = (props: ButtonProp) => {
  return (
    <div className="mx-2">
      <button
        className={`${VarientStyle[props.varient]}  ${sizeStyle[props.size]}`}
      >
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{" "}
        {props.text}
      </button>
    </div>
  );
};
