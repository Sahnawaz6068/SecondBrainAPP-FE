import './App.css'
import './index.css'
import { Button } from './components/UI/Button'
import { PlusIcon } from './icons/PlusIcon'
import { Share } from './icons/Share'
function App() {

  return (
    <>
      <Button varient="secondary" size="lg" startIcon={<PlusIcon size="lg"/>} endIcon="lala2" text="Add Content" onClick={()=>{}}/>
      <Button varient="primary" size="lg" startIcon={<Share size="lg"/>} endIcon="lala2" text="Share Brain" onClick={()=>{}}/>
      <Button varient="secondary" size="md" startIcon={<PlusIcon size="md"/>} endIcon="lala2" text="Add Content" onClick={()=>{}}/>
     
    </>
  )
}

export default App
