import styled, { keyframes } from 'styled-components';
import { FaRegTrashAlt } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import Toggle from 'react-toggle';

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditButton = styled.button`
  width: 105px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px 2px;
  border: 2px solid var(--sub, #8066d1);
  color: var(--sub, #8066d1);
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  cursor: pointer;
  &:hover {
    background-color: #391d93;
    color: #fff;
  }
`;

export const DeleteButton = styled.button`
  width: 105px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px 2px;
  border: 2px solid var(--sub, #8066d1);
  color: var(--sub, #8066d1);
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  &:hover {
    background-color: #391d93;
    color: #fff;
  }
  cursor: pointer;
`;

export const ButtonBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DiarySpace = styled(ReactQuill)`
  border-radius: 20px 2px;
  background: rgba(245, 242, 255, 0.5);

  box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.5) inset,
    0px 2px 5px 0px rgba(80, 53, 166, 0.1);
  backdrop-filter: blur(15px);
  width: 404px;
  height: 175px;
  flex-shrink: 0;
`;

export const ContentsContainerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalContentDiv = styled.div`
  width: 443px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 50px;
`;

export const ContentsWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBoxDiv = styled.h2`
  text-align: center;
  color: var(--main, #391d93);
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
`;

export const ContentTextArea = styled.textarea`
  border: 1px solid black;
  width: 400px;
  height: 200px;
`;

export const TrashCanImg = styled(FaRegTrashAlt)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const FooterBoxDiv = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const CancelImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 2px 20px;
  background: var(--sub, #8066d1);
  margin-left: 330px;
  position: fixed;
  cursor: pointer;
`;

export const HeaderWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomToggle = styled(Toggle)`
  .react-toggle-track {
    //배경색 - 체크여부 확인하고 초기값은 gray
    background-color: ${(props) => (props.checked ? 'yellow' : 'gray')};
    width: 100px;
    height: 30px;
    /* transform: translateX(15px); */
  }

  //thumb의 스타일 지정
  .react-toggle-thumb {
    background-color: purple;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    transform: translate(
      ${(props) => (props.checked ? '50px' : '0px')},
      4px
    ); /* 수정된 부분 */
  }

  //토글이 켜진 상태
  &.react-toggle--checked {
    .react-toggle-track {
      background-color: yellow;
    }
    .react-toggle-thumb {
      background-color: red;
    }
  }

  &:hover {
    .react-toggle-track {
      background-color: ${(props) =>
        props.checked ? 'red' : 'gray'} !important;
    }

    .react-toggle-thumb {
      background-color: pink;
    }
  }
`;

export const ToggleWrapperDiv = styled.div`
  width: 443px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ToggleContainerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PublicTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const PrivateTextDiv = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`;
