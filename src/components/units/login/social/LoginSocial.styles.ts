import styled from 'styled-components';

export const Circle = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ccc;
  background-size: cover;
  background-position: center;
  background-color: white;
  border: none;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  margin-left: 10px;
  font-size: 20px;
`;
