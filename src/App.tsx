import './App.css'
import './index.css'
import { Button } from './components/UI/Button'
import { PlusIcon } from './icons/PlusIcon'
import { Share } from './icons/Share'
import Card from './components/UI/Card'
function App() {

  return (
    <>
    <div className='flex justify-end  mr-5 mt-5'>
      <Button varient="primary" size="lg" startIcon={<Share size="lg"/>} endIcon="lala2" text="Share Brain" onClick={()=>{}}/>
      <Button varient="secondary" size="sm" startIcon={<PlusIcon size="md"/>} endIcon="lala2" text="Add Content" onClick={()=>{}}/>
    </div>
      <div className='flex pt-8'>
        <Card title={"hello"} link={"https://x.com/Sofiyaquresi/status/1921116969362694570"} type={"twitter"}/>
        <Card title={"hello"} link={"https://x.com/Sofiyaquresi/status/1921116969362694570"} type={"twitter"}/>
      </div>
    </>
  )
}

export default App
