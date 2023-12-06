import styled from 'styled-components';
import Toggle from 'react-toggle';

export const DiaryContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const DiaryWrapperUPDiv = styled.div`
  width: 100%;
  height: 164px;
  background-color: #ededed;
  position: relative;
`;

export const DiaryWrapperDOWNdiv = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 0 50px 0 0;
  filter: drop-shadow(-2px -5px 12px rgba(0, 0, 0, 0.2));
  transform: translateY(-30px);
`;

export const HeaderButtonBoxDiv = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-top: 50px;
  position: absolute;
  bottom: 50px;
`;
export const HeaderLine = styled.div`
  width: 150px;
  height: 1px;
  background-color: #909090;
  margin: 0 auto;
  position: absolute;
`;

export const HeaderFlexBox = styled.div`
  width: 180px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

export const OneBlackSpan = styled.div`
  width: 18px;
  height: 18px;
  background-color: #909090;
  border-radius: 50%;
`;

export const TwoBlankSpan = styled.div`
  width: 18px;
  height: 18px;
  background-color: #909090;
  border-radius: 50%;
`;

export const ThreeFilledSpan = styled.div`
  width: 55px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border: 1px solid #909090;
  border-radius: 12px;
  z-index: 10;
`;

export const DiaryTitleDiv = styled.div`
  width: 100%;
  margin: 87px 0 26px 0;
  text-align: left;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DiaryWriteTitleH3 = styled.h3`
  text-align: left;
`;

export const DiaryToggleTitleDiv = styled.div`
  width: 100%;
  height: 93px;
  margin: 50px 100px;
  text-align: center;
`;

export const CustomToggle = styled(Toggle)`
  .react-toggle-track {
    background-color: ${(props) => (props.checked ? 'yellow' : 'gray')};
    background-color: gray;
    width: 182px;
    height: 50px;
    transform: translateY(-3px);
  }

  .react-toggle-thumb {
    background-color: blue;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    transform: translateX(10px);
  }

  &.react-toggle--checked {
    .react-toggle-track {
      background-color: yellow;
    }
    .react-toggle-thumb {
      background-color: red;
      transform: translateX(45px);
    }
  }

  &:hover {
    .react-toggle-track {
      background-color: ${(props) => (props.checked ? 'red' : 'gray')};
    }

    .react-toggle-thumb {
      background-color: ${(props) => (props.checked ? 'red' : 'gray')};
    }
  }
`;

export const DiaryToggleP = styled.div`
  margin-bottom: 16px;
`;

export const FooterButtonBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
`;

export const ContentsWrapperDiv = styled.div`
  width: 417px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImagePlustButtonBox = styled.div``;

export const HiddenInput = styled.input`
  display: none;
`;

export const ImageBoxDiv = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;

export const PicutureImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const ImageButton = styled.button``;

export const AddEmotionButton = styled.button`
  width: 200px;
`;

export const PlusDiaryButton = styled.button`
  width: 200px;
  border: 3px solid blue;
  height: 50px;
  background-color: green;
`;

export const PrevButton = styled.button`
  height: 50px;
  width: 100px;
  margin-right: 50px;
`;

export const SubmitButton = styled.button`
  height: 50px;
  width: 100px;
`;

export const InputBoxDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentsTextarea = styled.textarea`
  width: 95%;
  height: 95%;
  margin: 0 auto;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 20px;
  background-color: #d9d9d9;
  &&focus {
    outline: none;
  }
  padding: 10px;
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 350px;
  /* border: 1px soInputDivlid black; */
`;

export const InputFooterBoxDiv = styled.div`
  width: 300px;
  height: 30px;
  /* border-top: 1px solid black; */
  display: flex;
  justify-content: end;
`;

export const TextAreaCount = styled.p`
  margin: 0px;
`;

export const DiaryPrivateCheckboxDiv = styled.div`
  width: 47px;
  height: 47px;
  border: 5px solid #d0cecd;
  border-radius: 13px;
`;

export const OpenPublicP = styled.p`
  margin-top: 5px;
  color: #d0cecd;
`;
