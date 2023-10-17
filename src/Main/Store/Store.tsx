import { createStore ,Reducer} from 'redux';
// 액션 유형 정의
export const SET_CONTENT_TYPE = 'SET_CONTENT_TYPE';

// 콘텐츠 유형 값 정의
export const ALL = null;
export const NEWS =  '25'
export const  MUSIC = '10'
export const  GAME =  '20'
export const  BEAUTY = '26'
export const  CARS ='2'
export const  ANIMATION ='1'
export const  SPORTS ='17'
export const  PET ='15'
export const  SCIENCE ='28'



// 리듀서
const reducer: Reducer<string | null, any> = (state = null, action: any) => {
    switch (action.type) {
      case ALL:
        return ALL;
      case NEWS:
        return NEWS;
      case MUSIC:
        return MUSIC;
      case GAME:
        return GAME;
      case BEAUTY:
        return BEAUTY;
      case CARS:
        return CARS;
      case ANIMATION:
        return ANIMATION;
      case SPORTS:
        return SPORTS;
      case PET:
        return PET;
      case SCIENCE:
        return SCIENCE;
      default:
        return state;
    }
  };
  
  // Redux 스토어 생성
  const store = createStore(reducer);
  
  export default store;
  
