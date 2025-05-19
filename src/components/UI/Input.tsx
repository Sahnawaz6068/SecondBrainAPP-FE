interface InputInterface {
  placeholder:any,
  referance?:any
}

const Input = ({placeholder,referance}:InputInterface) => {
  return (
    <div>
        <input  ref={referance}
                className="bg-white border hover:scale-105 duration-200 hover:translate-1.5 border-blue-100 p-2 rounded-md m-2 w-full dark:bg-slate-800 dark:text-white"
                type="text"
                placeholder={placeholder}
              />
    </div>
  )
}

export default Input