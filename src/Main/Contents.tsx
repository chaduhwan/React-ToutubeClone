import Thema from "./Thema";
import VideoComponent from "./VideoComponent";
import './Contents.scss'



export default function Contents() {


    return (
        <div style={{width:"100%"}}>
            <Thema/>
            <div className="ContentsContain">
                <div className="videoWrap">
                    <VideoComponent/>
                </div>
            </div>
        </div>
    )
}