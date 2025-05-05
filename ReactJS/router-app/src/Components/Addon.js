import {useNavigate} from 'react-router-dom'
export default function Addon(){
    const navigate = useNavigate()
    const tokenValue = false;

    const navigateTopage =()=>{
        if(tokenValue){
            navigate("/home")
        }else{
            navigate("/contactus")
        }
    }

    return(
        <>  <h2>Addon Component</h2>
            <button onClick={navigateTopage}>Click</button>
        </>
    )


}