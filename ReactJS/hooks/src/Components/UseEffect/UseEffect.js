 import {useState,useEffect} from 'react'

 export default function Effect1(){
  const [cnt,setCnt] = useState(0)
  const [data,setData] = useState('Hello')

  useEffect(()=>{
    console.log("Updated 1...");  //renders every time
  })

  // useEffect(()=>{
  //   console.log("Updated 1...");  //render only first time
  // },[]) 

  return(
    <>
    <h2>useEffect()1</h2>
      <p>Count is : {cnt}</p>
      <button onClick={()=>{setCnt(cnt+1)}}>Increment</button>
      <p>Data is : {data}</p>
      <button onClick={()=>{setData(data === "Hello"?"Hii":"Hello")}}>Change</button>
    </>
  )

 }