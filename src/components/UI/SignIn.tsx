
import Input from './Input'
import { Button } from './Button'

const SignIn = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='bg-gray-200 max-h-84 max-w-96  rounded-lg m-8 p-8 '>
        <Input placeholder={"Email"}/>
        <Input placeholder={"Password"}/>
        <h1 className='pb-2 text-gray-400'>You don't have an account. 
            <a className='text-blue-500' href="#SignIn"> Create account</a>
        </h1>
        <div className='ml-28'>
            <Button varient={"secondary"} size={"lg"} text={"SignIn"}/>
        </div>
    </div>
    </div>
  )
}

export default SignIn