import styled from 'styled-components';

export const ContainerDiv = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 443px;
  height: 960px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.3s ease-in-out;
`;

export const ModalContentDiv = styled.div`
  width: 414.683px;
  height: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBoxDiv = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const BoxButton = styled.div`
  width: 400px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 10px;
  text-align: center;
`;

export const TextStyleSpanH5 = styled.h5`
  color: #5035a6;
  width: 100%;
  text-align: center;
  font-size: 23px;
  font-weight: 500;
`;

export const TextStyleSpanP = styled.p`
  width: 100%;
  color: #646464;

  text-align: center;
  font-size: 17.063px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transform: translateY(-30px);
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

  font-weight: 500;
`;

export const TitleSpan = styled.span`
  color: #5035a6;
  font-size: 23px;
  font-weight: 500;
  margin-top: 15px;
`;

export const SubTitleSpan = styled.span`
  color: #646464;

  font-size: 17.063px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CancelButton = styled.button`
  width: 182px;
  height: 48px;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.18px;
  border-radius: 5px 20px;
  background: #8066d1;
  backdrop-filter: blur(15px);
  cursor: pointer;
  border: 0px;
  margin-right: 10px;
`;

export const OkButton = styled.button`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.18px;
  width: 186px;
  height: 48px;
  flex-shrink: 0;
  background-color: #391d93;
  border-radius: 5px 20px;
  margin-right: 10px;
  cursor: pointer;
  border: 0px;
`;
