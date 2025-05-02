import {useContext} from "react";
import UserContext from "./File1";

function File3(){
    const user = useContext(UserContext)

    return(
        <>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <hr /><hr />
        </>
    )

}

export default File3