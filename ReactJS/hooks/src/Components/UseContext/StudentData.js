import {useState} from "react"
import StudentRef from "./StudentRef"

export default function StudentData(props){
    const name1 = 'ReactJS'
    const [data,setData]=useState("1-Week")

    return(
        <StudentRef.Provider value={{name1,data}}>
            {props.children}
        </StudentRef.Provider>
    )
}