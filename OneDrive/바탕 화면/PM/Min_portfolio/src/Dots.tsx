import * as S from './Dots.styels';

interface Pages {
  num?: number;
  currentPage: number;
}

const Dot: React.FC<Pages> = ({ num, currentPage }) => {
  return (
    <S.BoxDiv
      style={{
        width: 10,
        height: 10,
        border: '1px solid white',
        borderRadius: 999,
        backgroundColor: currentPage === num ? 'white' : 'transparent',
        transition: 'background-color 0.5s',
      }}
    ></S.BoxDiv>
  );
};

const Dots: React.FC<Pages> = ({ currentPage }) => {
  return (
    <div style={{ position: 'fixed', top: '50%', right: 100 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 20,
          height: 100,
        }}
      >
        <Dot num={1} currentPage={currentPage}></Dot>
        <Dot num={2} currentPage={currentPage}></Dot>
        <Dot num={3} currentPage={currentPage}></Dot>
        <Dot num={4} currentPage={currentPage}></Dot>
        <Dot num={5} currentPage={currentPage}></Dot>
        <Dot num={6} currentPage={currentPage}></Dot>
      </div>
    </div>
  );
};

export default Dots;
