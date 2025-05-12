interface InputInterface {
  placeholder:any,
  referance?:any
}

const Input = ({placeholder,referance}:InputInterface) => {
  return (
    <div>
        <input  ref={referance}
                className="bg-gray-100 p-2 rounded-md m-2 w-full"
                type="text"
                placeholder={placeholder}
              />
    </div>
  )
}

export default Input