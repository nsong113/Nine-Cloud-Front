import styled from 'styled-components';
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
  background-color: rgba(0, 0, 0, 0.5);
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
  /* transform: translateY(-150px); */
`;

export const ModalContentDiv = styled.div`
  width: 415px;
  height: 460px;
  display: flex;
  flex-direction: column;
  border-radius: 5px 20px;
  background: #fff;

  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  /* align-items: center; */
  justify-content: center;

  background-image: url('/post_confirm_modal.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBoxDiv = styled.div`
  /* width: 20rem; */
  /* height: 70px; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextStyleSpanH5 = styled.div`
  color: #5035a6;
  text-align: center;
  font-size: 23px;
  font-weight: 500;
  margin-top: 20px;
`;

export const TextStyleSpanP = styled.p`
  color: #646464;

  text-align: center;
  font-size: 17.063px;
  font-weight: 400;

  /* background-color: red;
  transform: translateY(-30px); */
`;

export const BoxButton = styled.div`
  width: 100%;
  /* height: 65px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  transform: translateY(20px);
  /* background-color: #f9f7ff; */
`;

export const TextStyleSpan = styled.span`
  color: white;
`;

export const ToggleDiv = styled.div`
  width: 100%;
  height: 70px;
  transform: translateY(-25px);
  /* background-color: red; */
`;

// export const ToggleFlexDiv = styled.div`
//   width: 100%;
//   height: 100%;
//   margin: 0 auto;
//   /* display: flex;
//   align-items: center;
//   justify-content: space-between; */

//   background-color: #f9f7ff;
// `;

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
  height: 70%;
  text-align: center;
  transform: translateX(127px);
  /* background-color: blue; */
  /* margin-bottom: 20px; */
`;

export const CustomToggle = styled(Toggle)`
  .react-toggle-track {
    background-color: ${(props) => (props.checked ? '#8066D1' : '#CFC0FF')};
    width: 82px;
    height: 26px;
    border: 2px solid var(--main, #391d93);
    margin-top: 10px;
  }

  //thumb의 스타일 지정
  .react-toggle-thumb {
    background-color: ${(props) => (props.checked ? '#391D93' : '#391D93')};
    width: 38px;
    height: 38px;
    border-radius: 100px;
    transform: translate(${(props) => (props.checked ? '30px' : '0px')}, 4px);
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
  }
`;

export const ToggleTumbsImg = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 40px;
`;

export const PublicImg = styled(IoPeople)`
  fill: var(--contents-box, #f5f2ff);
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin: 0 10px;
`;

export const PrivateTextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitleSpan = styled.span`
  color: var(--sub, #8066d1);
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  line-height: 100%;
`;

export const PublicTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 15px; */
  /* margin-top: 15px; */
`;

export const emojiImgBox = styled.div`
  width: 130px;
  height: 130px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
