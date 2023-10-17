import musiclogo from './Youtube_Music_icon.png'
import kidslogo from './youtube-kids_icon.webp'
import prelogo from './logo.png'
import './Navi.scss'
import { IconProp, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBagShopping, faClipboard, faClock, faClockRotateLeft, faFilm, faFire, faFlag, faFolderPlus, faGamepad, faGear, faHouse, faLightbulb, faMessage, faMusic, faPodcast, faQuestionCircle, faThumbsUp, faTowerBroadcast, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
config.autoAddCss = false



export default function Navi() {

    return (
        <div className='NaviMain'>
            <div className='topdiv'>
                <button className='home'><FontAwesomeIcon className='icon' icon={faHouse as IconProp}/><div>홈</div></button>
                <button><FontAwesomeIcon className='icon'icon={faFilm as IconProp}/><div>Shorts</div></button>
                <button><FontAwesomeIcon className='icon'icon={faHouse as IconProp}/><div>구독</div></button>
            </div>

            <div>
                <button><FontAwesomeIcon className='icon'icon={faFolderPlus as IconProp}/><div>보관함</div></button>
                <button><FontAwesomeIcon className='icon'icon={faClockRotateLeft as IconProp}/><div>시청기록</div></button>
                <button><FontAwesomeIcon className='icon'icon={faClock as IconProp}/><div>나중에 볼 동영상</div></button>
                <button><FontAwesomeIcon className='icon'icon={faThumbsUp as IconProp}/><div>좋아요 표시한 동영상</div></button>
            </div>

            <div>
                <div>탐색</div>
                <button><FontAwesomeIcon className='icon'icon={faFire as IconProp}/><div>인기 급상승</div></button>
                <button><FontAwesomeIcon className='icon'icon={faBagShopping as IconProp}/><div>쇼핑</div></button>
                <button><FontAwesomeIcon className='icon'icon={faMusic as IconProp}/><div>음악</div></button>
                <button><FontAwesomeIcon className='icon'icon={faClipboard as IconProp}/><div>영화</div></button>
                <button><FontAwesomeIcon className='icon'icon={faTowerBroadcast as IconProp}/><div>실시간</div></button>
                <button><FontAwesomeIcon className='icon'icon={faGamepad as IconProp}/><div>게임</div></button>
                <button><FontAwesomeIcon className='icon'icon={faTrophy as IconProp}/><div>스포츠</div></button>
                <button><FontAwesomeIcon className='icon'icon={faLightbulb as IconProp}/><div>학습</div></button>
                <button><FontAwesomeIcon className='icon'icon={faPodcast as IconProp}/><div>팟캐스트</div></button>
            </div>

            <div>
                <div>YouTube 더보기</div>
                <button><img src={prelogo} alt="prelogo" /><div>YouTube Preminum</div></button>
                <button><img src={musiclogo} alt="musiclogo" /><div>YouTube Music</div></button>
                <button><img src={kidslogo} alt="kidslogo" /><div>YouTube Kids</div></button>
            </div>

            <div>
                <button><FontAwesomeIcon className='icon'icon={faGear as IconProp}/><div>설정</div></button>
                <button><FontAwesomeIcon className='icon'icon={faFlag as IconProp}/><div>신고 기록</div></button>
                <button><FontAwesomeIcon className='icon'icon={faQuestionCircle as IconProp}/><div>고객 센터</div></button>
                <button><FontAwesomeIcon className='icon'icon={faMessage as IconProp}/><div>의견 보내기</div></button>
            </div>

            <div className='linkcon'>
                <div>
                    <a>정보</a> <a>보도자료</a> <a>저작권</a> <a>문의하기</a> <a>크리에이터</a> <a>광고</a> <a>개발자</a>
                </div>

                <div>
                <a>약관</a> <a>개인정보처리방침</a> 
                    <div>
                        <a>정책 및 안전</a>
                        <a>YouTube 작동의 원리</a>
                        <a>새로운 기능 테스트하기</a>
                    </div>
                    <div className='bottomdiv'>
                    © 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, <p>사업자정보, 불법촬영물 신고</p>
크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다.
                    </div>
                </div>

            </div>
        </div>
    )
}