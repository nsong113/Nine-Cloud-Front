import styled from 'styled-components';
import { IStyled } from './ConfirmOverlay.types';
import { IPalette } from './ConfirmOverlay.types';
import Toggle from 'react-toggle';
import { IoPeople } from 'react-icons/io5';

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.3s ease-in-out;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-130px);
`;

export const ModalContentDiv = styled.div`
  width: 415px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: #fff;

  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 15px; */
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBoxDiv = styled.div`
  width: 20rem;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextStyleSpanH5 = styled.h5`
  color: #5035a6;

  text-align: center;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TextStyleSpanP = styled.p`
  /* margin-bottom: 20px; */

  color: #646464;

  text-align: center;
  font-size: 17.063px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transform: translateY(-30px);
`;

export const CancelButton = styled.div`
  width: 146px;
  height: 60px;
  border: 1px solid #ece9f5;
  border-radius: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #5035a6;

  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BoxButton = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextStyleSpan = styled.span`
  color: white;
`;

export const StyleButton = styled.div`
  width: 242px;
  height: 60px;
  background-color: #ece9f5;
  border-radius: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #5035a6;

  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ToggleDiv = styled.div`
  width: 100%;
  height: 70px;
`;

export const ToggleFlexDiv = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToggleP = styled.p`
  width: 60%;
  color: #5035a6;

  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DiaryToggleTitleDiv = styled.div`
  width: 40%;
  height: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CustomToggle = styled(Toggle)`
  .react-toggle-track {
    //배경색 - 체크여부 확인하고 초기값은 gray
    background-color: ${(props) => (props.checked ? '#8066D1' : '#CFC0FF')};
    width: 130px;
    height: 38px;
    border: 2px solid var(--main, #391d93);
    margin-top: 10px;
    /* transform: translateX(15px); */
  }

  //thumb의 스타일 지정
  .react-toggle-thumb {
    background-color: ${(props) => (props.checked ? '#391D93' : '#391D93')};
    width: 50px;
    height: 50px;
    border-radius: 100px;
    transform: translate(${(props) => (props.checked ? '60px' : '0px')}, 4px);
  }

  //토글이 켜진 상태
  &.react-toggle--checked {
    .react-toggle-track {
      background-color: #8066d1;
    }
    .react-toggle-thumb {
      background-color: #cfc0ff;
    }
  }

  &:hover {
    .react-toggle-track {
      background-color: ${(props) =>
        props.checked ? '#8066D1' : '#CFC0FF'} !important;
    }

    /* .react-toggle-thumb {
      background-color: pink;
    } */
  }
`;

export const ToggleTumbsImg = styled.img`
  width: 17px;
  height: 17px;
`;

export const PublicImg = styled(IoPeople)`
  fill: var(--contents-box, #f5f2ff);
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const PrivateTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 15px;
`;

export const SubTitleSpan = styled.span`
  color: var(--sub, #8066d1);
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  line-height: 100%;
`;

export const PublicTextDiv = styled.div``;
