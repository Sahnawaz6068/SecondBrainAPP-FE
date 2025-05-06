interface PlusIconProps {
    size:"sm"|"md"|"lg"
}

const sizeVarients={
    sm:"size-4",
    md:"size-6",
    lg:"size-6"
}

export const PlusIcon=(props:PlusIconProps)=>{
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         className={sizeVarients[props.size]}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    </>
}