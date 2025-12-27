import { useRouteError } from "react-router"
import Header from "./Header";

const Error= ()=>{
    const err= useRouteError();
    return(
        <div >
<Header/>
<div className="error-container">
<h1 className="WarningTxt">Error!!</h1>
<h3 className="ErrCode">{err.status}:{err.statusText}....!!</h3>
</div>

        </div>
    )
}

export default Error;