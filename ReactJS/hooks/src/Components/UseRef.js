import {useRef} from 'react'

export default function Hook3(){
    const inputRef = useRef(null);
    const focusInput =()=>{
        inputRef.current.focus();
        inputRef.current.style.color='blue'
    }

    return(
        <>  <h2>useRef()</h2>
            <input type="text" ref={inputRef}/>
            <input type="button" value="Click"  onClick={focusInput}/>
        </>
    )
}