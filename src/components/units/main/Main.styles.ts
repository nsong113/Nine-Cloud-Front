import styled from 'styled-components';

export const CalenContainerDiv = styled.div`
  width: 80%;
  height: 500px;
  margin: 60px auto;
`;

export const ShowCloudDivRed = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
`;

export const ShowCloudDivGreen = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
`;

export const ShowCloudDivBlue = styled.div`
  width: 20px;
  height: 20px;
  background-color: blue;
`;

export const ShowCloudDivBlack = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
`;

export const CalenderBackDiv = styled.div``;

//////////////////////////////////
export const CalendarContainerDiv = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 20px;
`;

export const CalenderPrevBtnDiv = styled.div`
  width: 50px;
  height: 50px;
  display: center;
  align-items: center;
  justify-content: center;
`;

export const CalenderHeaderDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;

export const CalendarTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: blueviolet;
`;

export const TableBody = styled.tbody`
  height: 100px;
`;

export const TableRow = styled.tr``;

export const DayRoow = styled.tr`
  height: 100px;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
  ${(props) =>
    props.children === 3
      ? 'background-color: red;'
      : props.children === 5
      ? 'background-color: green;'
      : ''}
`;

export const ThCell = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: aliceblue;
`;
