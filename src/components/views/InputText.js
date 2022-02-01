import { useState } from "react";

const InputText=(props)=> {
    const[Input,setInput]=useState("")

    const onInputHandler=(event)=>{
        setInput(event.currentTarget.value)
    }

    return(
        
        <div className={props.class} style={{ width: "268", height: "38px", margin: "0px auto 6px auto", display: "inline-block", position: "relative" }}>
            <div className="Content">
                <label className="Label">
                    <span className="Text">전화번호, 사용자 이름 또는 이메일</span>                        
                    <input className="Input" type={"text"} placeholder={props.placeholder} value={Input}onChange={onInputHandler}  />
                </label>
                <div style={{ width: "8px", height: "36px" }}></div>
            </div>
        </div>
    )
};

export default InputText;