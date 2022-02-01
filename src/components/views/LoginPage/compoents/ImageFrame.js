import { useEffect, useState } from "react";

//img
import one from "../../../../img/one.jpg";
import two from "../../../../img/two.jpg";
import three from "../../../../img/three.jpg";
import iphoneback from "../../../../img/iphone.jpg";
import iphonefront from "../../../../img/img.png";

const ImageFrame=()=>{
    let interval;
    let [Num,setNum]=useState(0);

    const onNumHandler = (event)=>{
        setNum(Num);
    }

    const imgArray=[one,two,three];

    useEffect(() => {
        interval = setInterval(() => {
            Num++;
          if(Num>2){
            Num=0;
          }
          onNumHandler();
          return Num;
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    let BeforeNum=()=>{
        if (Num>=1&& Num<=2){
            return Num-1;
        }
        else{
            return 2;
        }
    }

    return (
        <div className="ImageFrame">
            <img className="phone" src={iphoneback} style={{ top: "21px", left: "44px" }} />
            <img className="phone" src={iphonefront} style={{ top: "34px", left: "149px" }} />
            <div className="ShowImage" style={{ top: "107px", left: "166px" }}>
                <img className="one" src={imgArray[BeforeNum()]} />
                <img className="two" src={imgArray[Num]} />
                
            </div>
        </div>
    )
}

export default ImageFrame;
