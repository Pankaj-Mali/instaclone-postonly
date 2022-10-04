import "../style/view.css"
import React from 'react'
import Header from "./header"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Card from "./card"


const Views = () => {
  const [data , setdata]= useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/homePage')
    .then((response)=>setdata(response.data));

  },[])
  return (
    <>
    <div className="viewpage-container">
    <Header/>
    <div className="card-container">
    <Card data={data}/>
    </div>
    </div>
    </>
  )
}
 export default Views