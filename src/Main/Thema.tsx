import { useDispatch } from 'react-redux'
import './Thema.scss'
import { ALL, ANIMATION, BEAUTY, CARS, GAME, MUSIC, NEWS, PET, SCIENCE, SPORTS } from './Store/Store';
import { useState } from 'react';

export default function Thema()  {
    
    const dispatch = useDispatch();
    const [active , setActive] = useState(ALL)

    const handleCategoryClick = (category : any) => {
        dispatch({ type: category });
        setActive(category); // 클릭한 카테고리를 활성화된 카테고리로 설정
    };

    return (
        <div className='ThemaCon'>
            <div onClick={()=>handleCategoryClick(ALL)} className={active === ALL ? 'active' : ''}>전체</div>
            <div onClick={()=>handleCategoryClick(NEWS)} className={active === NEWS ? 'active' : ''}>뉴스</div>
            <div onClick={()=>handleCategoryClick(MUSIC)} className={active === MUSIC ? 'active' : ''}>음악</div>
            <div onClick={()=>handleCategoryClick(GAME)} className={active === GAME ? 'active' : ''}>게임</div>
            <div onClick={()=>handleCategoryClick(BEAUTY)} className={active === BEAUTY ? 'active' : ''}>뷰티 팁</div>
            <div onClick={()=>handleCategoryClick(CARS)} className={active === CARS ? 'active' : ''}>자동차</div>
            <div onClick={()=>handleCategoryClick(ANIMATION)} className={active === ANIMATION ? 'active' : ''}>만화 영화</div>
            <div onClick={()=>handleCategoryClick(SPORTS)} className={active === SPORTS ? 'active' : ''}>스포츠</div>
            <div onClick={()=>handleCategoryClick(PET)} className={active === PET ? 'active' : ''}>동물</div>
            <div onClick={()=>handleCategoryClick(SCIENCE)} className={active === SCIENCE ? 'active' : ''}>과학</div>
            <div onClick={()=>handleCategoryClick(ALL)} className={active === "222" ? 'active' : ''}>최근에 업로드된 동영상</div>
            <div onClick={()=>handleCategoryClick(ALL)} className={active === "222" ? 'active' : ''}>새로운 맞춤 동영상</div>
        </div>
    )
};
