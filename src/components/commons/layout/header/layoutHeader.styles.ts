import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CalendarContainerDiv = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

export const HeaderContainerDiv = styled.div`
  width: 100%;
  height: 115px;
  flex-shrink: 0;
  border-radius: 0px 0px 40px 0px;
  background: #391d93;
  box-shadow: 0px 4px 4px 0px rgba(57, 29, 147, 0.2);
`;
export const CalenderHeaderDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoBoxDiv = styled.div`
  width: 100%;
  display: flex;
  margin: 35px 0px 0px 27px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHoverTapButton = styled(motion.button)`
  background: rgba(239, 170, 173, 0);

  border: 0;
`;

export const AvatarSizeImg = styled.img`
  width: 58px;
  height: 58px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 159px;
  border: 1px solid white;

  background: url(<path-to-image>), lightgray 50% / cover no-repeat;

  &:hover {
    border: 3px solid white;
  }
`;

export const LogoImg = styled.img`
  width: 200.25px;
  height: 50.516px;
  margin-bottom: 10px;
  cursor: pointer;
`;
