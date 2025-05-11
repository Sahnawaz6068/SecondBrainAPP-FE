

const Input = ({placeholder}:any) => {
  return (
    <div>
        <input
                className="bg-gray-100 p-2 rounded-md m-2 w-full"
                type="text"
                placeholder={placeholder}
              />
    </div>
  )
}

export default Input