import React from 'react';
import styled from 'styled-components';
import useCalendar from 'src/components/commons/hooks/useCalender';

const CalendarWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;

const CalendarTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableBody = styled.tbody`
  height: 100px;
`;

const TableRow = styled.tr``;

const DayRoow = styled.tr`
  height: 100px;
`;

const TableCell = styled.td`
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

const ThCell = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Main = () => {
  const { weekCalendarList, currentDate, setCurrentDate, DAY_LIST } =
    useCalendar();

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <CalendarWrapper>
      <Header>
        <Button onClick={handlePrevMonth}>Previous Month</Button>
        <span>{currentDate.toLocaleDateString()}</span>
        <Button onClick={handleNextMonth}>Next Month</Button>
      </Header>
      <CalendarTable>
        <TableHead>
          <TableRow>
            {DAY_LIST.map((day, index) => (
              <ThCell key={index}>{day}</ThCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {weekCalendarList.map((week, weekIndex) => (
            <DayRoow key={weekIndex}>
              {week.map((day, dayIndex) => (
                <TableCell key={dayIndex}>{day !== 0 ? day : ''}</TableCell>
              ))}
            </DayRoow>
          ))}
        </TableBody>
      </CalendarTable>
    </CalendarWrapper>
  );
};

export default Main;
