import {useRef} from 'react'
export default function UncontrolForm(){
    const inputRef = useRef(null)

    const handleSubmit=(event)=>{
        alert(`value: ${inputRef.current.value}`)
    }

    return(
        <>
            <h2>UnControlled Forms</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter Name : </label>
                <input type="text"  ref={inputRef}/>
                <input type="submit" value="submit" />
            </form>
        </>
    )
}