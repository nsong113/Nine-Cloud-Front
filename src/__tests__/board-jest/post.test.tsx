import JestUnitTestPage from 'src/components/units/board/write/draw/test';

//가상으로 렌더하는 돔을 만들고
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

//***UI 테스트하기***
it('내가 원하는대로 그려지는지 테스트', () => {
  //거기에다가 렌더를 해서 그림을 그린다.
  render(<JestUnitTestPage />);

  //이제 거기에 뭐가 들어있는지 (텍스트) 스크린할꺼임.
  //그걸 변수에 담고
  const myText = screen.getByText('철수는 13살입니다.');
  //그 변수가 document안에 있는지 기대한다.
  expect(myText).toBeInTheDocument();

  const myText2 = screen.getByText('취미 입력하기');
  expect(myText2).toBeInTheDocument();
  const myText3 = screen.getByText('철수랑 놀러가자');
  expect(myText3).toBeInTheDocument();
});

//***스냅샷 테스트***
//기존의 내용이랑 지금이랑 달라진게 없는지.
it('기존 사진이랑 바뀐게 없는지 비교해보자 -스냅샷테스트 ', () => {
  //거기에다가 렌더를 해서 그림을 그린다. 그린 결과를 변수에 담는다.
  const result = render(<JestUnitTestPage />);
  //result에 있는 통을 스냅샷과 메치시켜라
  //스넵샷이 없는 경우는 ㅈ사진을 찍고 , 사진이 있으면 사진을 비교한다.
  expect(result.container).toMatchSnapshot(); //사진을 찍는 역할 -> snapshot폴더가 생성된다.
  //사진 수정하고 싶으면 yarn test -u
});

//**유저 이벤트 테스트 ***/
it('유저 이벤트 테스트, 버튼을 눌렀을 때 제대로 작동하나?', () => {
  render(<JestUnitTestPage />);
  //버튼을 눌렀을 때 1이 증가되어야 하는데 5가 증가 되었다고 알려주는 용도다.

  //뭘 클릭하는지 가지고 오려면..스크린
  //role이 'count-button'인 아이를 가지고 와서 .. fireEvent에 넣는다 (걔를 클릭해줘)

  //버튼을 클릭했을 때- 나 대신에 버튼을 클릭해주는 것
  fireEvent.click(screen.getByRole('count-button'));

  //나는 예상해. 카운트라는 값을 가져왔을 떄, 걔 값이 1을 가지고 있을꺼야
  expect(screen.getByRole('count')).toHaveTextContent('1');
});
