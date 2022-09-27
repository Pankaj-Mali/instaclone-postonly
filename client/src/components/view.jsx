import "../style/view.css"
import React from 'react'
import Header from "./header"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"


const Views = () => {
  const [data , setdata]= useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/view')
    .then((response)=>setdata(response.data));

  },[])
  console.log(data)
  return (
    <>
    <Header/>
    </>
  )
}
 export default Views