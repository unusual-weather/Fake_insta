import google from "../../img/GoogleDownload.png";
import apple from "../../img/AppDownload.png";

const Download = () => {
    return (
        <div className="Download">
            <p>앱을 다운로드 하세요.</p>
            <div>
                <a href="/" style={{ width: "138px" }}><img src={apple} /></a>
                <a href="/"><img src={google} /></a>
            </div>
        </div>
    )
}

export default Download;