import React, {useEffect, useState } from 'react';
import './VideoComponent.scss';
import { IconProp, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player';
import axios from 'axios';
import SkeletonVideo from './SkeletonVideo';
import { useSelector } from 'react-redux';
config.autoAddCss = false;

interface VideoData {
    id: string;
    snippet: {
        title: string;
        channelTitle: string;
        publishedAt : string;
        thumbnails : {
            default :{
                url :string
            }
        }
    };
    statistics: {
        viewCount: number;
    };
}

export default function VideoComponent() {
    const [video, setVideo] = useState<VideoData[]>([]);
    const [profile, setProfile] = useState<string[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [hoverStates, setHoverStates] = useState<boolean[]>([]);
    const types = useSelector((state) => state);

    
    useEffect(() => {
        const youtubeApi = axios.create({
            baseURL: "https://youtube.googleapis.com/youtube/v3",
            params: { key: process.env.REACT_APP_SECRET_KEY },
        });
        
        const recommendVideos = async () => {
            try {
                const response = await youtubeApi.get("videos", {
                    params: {
                        part: "snippet, statistics",
                        chart: "mostPopular",
                        regionCode: "KR",
                        maxResults: 12,
                        videoCategoryId: types,
                    },
                });
    
                const videoList = response.data.items;
                const channelInfoList: string[] = videoList.map((video : any) => {
                    return video.snippet.channelId;
                });
                const loadChannelInfo = async (channelInfoList: string[]) => {
                    const profiles = await Promise.all(channelInfoList.map(async (channelId) => {
                        const channelRes = await youtubeApi.get("channels", {
                            params: {
                                id: channelId,
                                part: "snippet",
                            },
                        });
                        return channelRes.data.items[0].snippet.thumbnails.default.url;
                    }));
                    setProfile(profiles);
                }
        
                setVideo(videoList);
                loadChannelInfo(channelInfoList);
                setHoverStates(new Array(videoList.length).fill(true))
                setLoad(true);
            } catch (error) {
                console.log(error);
            }
        };
        recommendVideos();
    }, [types])
    

    const handleMouseOver = (index: number) => {
        const updatedHoverStates = [...hoverStates];
        updatedHoverStates[index] = false; // 해당 인덱스의 비디오를 호버 상태로 변경
        setHoverStates(updatedHoverStates);
    };

    const handleMouseOut = (index: number) => {
        const updatedHoverStates = [...hoverStates];
        updatedHoverStates[index] = true; // 해당 인덱스의 비디오를 아웃 상태로 변경
        setHoverStates(updatedHoverStates);
    };

    function getTimeAgo(publishedDate: any) {
        const currentDate: any = new Date();
        const videoDate: any = new Date(publishedDate);
        const timeDifferenceInMilliseconds = currentDate - videoDate;

        const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) {
            return `${years}년 전`;
        } else if (months > 0) {
            return `${months}개월 전`;
        } else if (days > 0) {
            return `${days}일 전`;
        } else if (hours > 0) {
            return `${hours}시간 전`;
        } else if (minutes > 0) {
            return `${minutes}분 전`;
        } else {
            return `${seconds}초 전`;
        }
    }

    return (
        <>
            {load ? (
                video.map((videoItem, index) => (
                    <div key={index} className='videocomponentCon'>
                        <div className='player-wrapper' onMouseOver={() => handleMouseOver(index)} onMouseOut={() => handleMouseOut(index)}>
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoItem.id}`} light={hoverStates[index]} muted={true} playing={true} width={'390px'} height={'210px'} />
                        </div>
                        <div className='introCon'>
                            <div>
                                <img src={`${profile[index]}`} alt="profile" />
                            </div>
                            <div>
                                <h3>{videoItem.snippet.title}</h3>
                                <div>{videoItem.snippet.channelTitle}</div>
                                <span>
                                    {videoItem.statistics.viewCount >= 10000 ? (
                                        <span>조회수 {Math.floor(videoItem.statistics.viewCount / 10000)}만회</span>
                                    ) : (
                                        <span>조회수 {Math.floor(videoItem.statistics.viewCount / 1000)}천회</span>
                                    )}
                                    • {getTimeAgo(videoItem.snippet.publishedAt)}
                                </span>
                            </div>
                            <button><FontAwesomeIcon className='icon' icon={faEllipsisVertical as IconProp} /></button>
                        </div>
                    </div>
                ))
            ) : (
                <>
                    <SkeletonVideo />
                    <SkeletonVideo />
                    <SkeletonVideo />
                    <SkeletonVideo />
                    <SkeletonVideo />
                    <SkeletonVideo />
                    <SkeletonVideo />
                    <SkeletonVideo />
                    <SkeletonVideo />
                </>
            )}
        </>
    );
}
