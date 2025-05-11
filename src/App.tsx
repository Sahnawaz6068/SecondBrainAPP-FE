import './App.css'
import './index.css'
import { Button } from './components/UI/Button'
import { PlusIcon } from './icons/PlusIcon'
import { Share } from './icons/Share'
import Card from './components/UI/Card'
import CreateContentModel from './components/UI/CreateContentModel'
import { useState } from 'react'
import Sidebar from './components/UI/Sidebar'
function App() {
const [modelOpen,setModelOpen]=useState(false)
  return (
    <>
    <Sidebar/>
    <div className='flex justify-end  mr-5 mt-5'>
      <Button  varient="primary" size="lg" startIcon={<Share size="lg"/>} endIcon="lala2" text="Share Brain" onClick={()=>{}}/>
      <Button  varient="secondary" size="sm" startIcon={<PlusIcon size="md"/>} endIcon="lala2" text="Add Content" onClick={()=>{setModelOpen(true)}}/>
    </div>
      <div className='flex pt-8 ml-80'>
        <Card title={"Ind vs Pak"} link={"https://x.com/mihir___dev/status/1921316447067787661"} type={"twitter"}/>
        <Card title={"Ind vs Pak"} link={"https://x.com/sierraoperator/status/1921432180821045437"} type={"twitter"}/>
      </div>
      <CreateContentModel open={modelOpen} onClose={()=>setModelOpen(false)}/>
    </>
  )
}

export default App
