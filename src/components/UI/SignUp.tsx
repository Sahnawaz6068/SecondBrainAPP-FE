
import Input from './Input'
import { Button } from './Button'

const SignUp = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='bg-gray-200 max-h-96 max-w-96  rounded-lg m-8 p-8 '>
        <Input  placeholder={"FirstName"}/>
        <Input placeholder={"LastName"}/>
        <Input placeholder={"Email"}/>
        <Input placeholder={"Password"}/>
        <h1 className='pb-2 text-gray-400'>You have alredy an account. 
            <a className='text-blue-500' href="#login"> SignIn</a>
        </h1>
        <div className='ml-18'>
            <Button varient={"secondary"} size={"lg"} text={"Signup"}/>
        </div>
    </div>
    </div>
  )
}

export default SignUp