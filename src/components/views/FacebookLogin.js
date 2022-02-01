import {useNavigate } from 'react-router-dom';

//img
import facebook from "../../img/FacebookLOGO.png";

const FacebookLogin = () => {
    let navigate= useNavigate();

    const onFacebookhandler=(event)=>{
            event.preventDefault();
            navigate("/passwd");

    }
    return (
        <div className="FacebookLogin">
            <button onClick={onFacebookhandler}>
                <img src={facebook}></img>
                <span>Facebook으로 로그인</span>
            </button>
        </div>
    )
}

export default FacebookLogin;