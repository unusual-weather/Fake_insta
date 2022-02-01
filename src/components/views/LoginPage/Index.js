import { useEffect, useState } from "react";

// css
import "./Index.css"

// component 
import LoginFormFrame from "./compoents/LoginForm";
import RegisterInfoFrame from "./compoents/RegisterInfo"
import DownloadFrame from "../Download"
import ImageFrame from "./compoents/ImageFrame";

function LoginPage() {
    
    

    const Frame = {
        height:"100%",
        width:"100%",
        display: "flex", 
        justifyContent: "center",
        backgroundColor:"#FAFAFA" 
    }

    return (
        <div style={Frame}>
            <article>
                <ImageFrame/>
                <div className="LoginInput">
                    <LoginFormFrame/>
                    <RegisterInfoFrame/>
                    <DownloadFrame/>
                </div>
            </article>
        </div>
    );
}

export default LoginPage;

 


