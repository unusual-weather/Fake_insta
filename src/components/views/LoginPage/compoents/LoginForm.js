// component 
import LOGO from "../../LOGO";
import Textor from "../../Textor";
import InputText from "../../InputText";
import Btn from "../../Btn";
import FacebookLogin from "../../FacebookLogin"

const LoginForm = () => {
    return (
        <div className="LoginInfo">
            <LOGO />
            <div className='LoginForm'>
                <form>
                    <div className="LoginUI">
                        <InputText class="ID" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <InputText class="Passwd" placeholder="비밀번호" />
                        <Btn value="로그인" />
                        <Textor />
                        <FacebookLogin />
                    </div>
                    <a href="/passwd" style={{ width: "348px", height: "16px",textAlign:"center", marginTop: "12px", fontSize: "12px", textDecoration: "none"}}>비밀번호를 잊으셨나요?</a>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;