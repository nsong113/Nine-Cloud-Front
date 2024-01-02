import styled from 'styled-components';

export const ContentsWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`;

export const ContentsHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloudImg = styled.img`
  width: 110px;
  height: 110px;
  margin-top: 12px;
`;

export const ConentsHeaderRightDiv = styled.div`
  display: flex;
`;

export const heartBoxDiv = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
`;

export const CategoryText = styled.span`
  color: var(--sub, #8066d1);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px;
  margin-left: 3px;
`;

export const StatusBoxDiv = styled.div`
  margin-top: 7px;
  border-radius: 10px 2px;
  border: 1px solid var(--line, #cfc0ff);
  box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.5) inset;
  backdrop-filter: blur(15px);
  width: 77px;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const MindStatusSpan = styled.span`
  width: 77px;
  height: 30px;
  flex-shrink: 0;
  color: var(--main, #391d93);
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;

export const SentenceSpan = styled.span`
  color: var(--sub, #8066d1);
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 15px;
`;

export const ContentsFooterDiv = styled.div`
  width: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;

  border-bottom: 2px solid #5035a6;
`;

export const PencilsBoxDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const EditPencilDiv = styled.div`
  border-radius: 5px;
  border: 1px solid var(--sub, #8066d1);
  background: rgba(255, 255, 255, 0.3);
  width: 87px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const EditSpan = styled.span`
  color: #000;
  text-align: right;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border-bottom: 1px solid #8066d1;
  cursor: pointer;
  &:hover {
    color: #391d93;
  }
  margin-bottom: 3px;
`;

export const DeleteSpan = styled.span`
  color: #000;
  text-align: right;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  cursor: pointer;
  &:hover {
    color: #391d93;
  }
`;

export const DotWrapperDiv = styled.div`
  height: 50px;
  width: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PencilImg = styled.img`
  width: 5px;
  height: 24px;
  cursor: pointer;
  /* margin-left: 320px; */
`;

export const ContentBoxHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentsBoxDiv = styled.div`
  width: 380px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 20px 2px;
  background: rgba(245, 242, 255, 0.5);
  overflow: scroll;
  box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.5) inset,
    0px 2px 5px 0px rgba(80, 53, 166, 0.1);
  backdrop-filter: blur(15px);
`;

export const ContentBoxDiv = styled.div`
  margin: 0px 18px 30px 18px;
`;

export const ContentSpan = styled.span`
  color: rgba(43, 23, 107, 1);
  font-family: Spoqa Han Sans Neo;
  font-size: 18.012px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

