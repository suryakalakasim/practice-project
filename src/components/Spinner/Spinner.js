import {memo} from "react";
 import spinnerImg from '../../imeags/spinner/Loading_icon.gif';
const Spinner=()=>{
    return(
        <div>
        <img src={spinnerImg} alt="image" className="d-block m-auto " style={{width:"200px"}}/>                    
        </div>
    )
}
export default memo(Spinner);