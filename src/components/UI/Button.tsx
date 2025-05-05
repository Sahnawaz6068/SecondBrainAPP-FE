
type Varient="primary"|"secondry"

interface ButtonProp{
    varient:Varient,
    size:"sm"|"md"|"lg",
    startIcon?:any,
    endIcon?:any,
    text:String,
    onClick:()=>void
}

const VarientStyle={
    "primary":"bg-purple-300",
    "secondry":"bg-purple-600"
}

export const Button=(props:ButtonProp)=>{
    return <button className={VarientStyle[props.varient]} >{props.text}</button>
}

