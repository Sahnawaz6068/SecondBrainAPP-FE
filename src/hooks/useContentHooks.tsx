import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios";

const useContentHooks = () => {
    const [contents,setContent]=useState([]);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/content`)
        .then((response)=>{
            setContent(response.data)
        })
    })
  return (
    <div>${contents}</div>
  )
}
export default useContentHooks