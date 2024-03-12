import { useEffect, useRef, useState } from 'react';
import './App.css';

import Dots from './Dots';
import Project from './Unit/Project/Project';
import Experience from './Unit/Experience/Experience';
import Cheolmin from './Unit/Cheolmin/Cheolmin';
import Contact from './Unit/Contact/Contact';
import Introduction from './Unit/Introduce/Introduction';
import Thinkness from './Unit/Thinkness/Thinkness';

function App() {
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isActiveFireWork, setIsActiveFireWork] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isActiveFireWork) {
      const timeoutId = setTimeout(() => {
        setIsActiveFireWork(false);
      }, 1500);
      return () => clearTimeout(timeoutId);
    }
  }, [isActiveFireWork]);

  useEffect(() => {
    setIsActiveFireWork(true);
    const wheelHandler = (e: React.WheelEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (!outerDivRef.current) {
        return;
      }

      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log('현재 1페이지, down');
          outerDivRef?.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log('현재 2페이지, down');
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          console.log('현재 3페이지, up');
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(4);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          // 현재 4페이지
          console.log('현재 3페이지, up');
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(5);
          setIsClicked(true);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          setIsActiveFireWork(true);
          // 현재 4페이지
          console.log('현재 3페이지, up');
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT * 5,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(6);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log('현재 1페이지, up');
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log('현재 2페이지, up');
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          console.log('현재 3페이지, up');
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          // 현재 4페이지
          console.log('현재 3페이지, up');
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(4);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 6) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(5);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;

    if (outerDivRefCurrent) {
      // @ts-expect-error just
      outerDivRefCurrent.addEventListener('wheel', wheelHandler);
    } else {
      console.error(
        'outerDivRef가 null입니다. 이벤트 리스너를 추가하지 않습니다.'
      );
    }
    return () => {
      if (outerDivRefCurrent) {
        // @ts-expect-error just
        outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
      } else {
        console.error(
          'outerDivRef가 null입니다. 이벤트 리스너를 제거하지 않습니다.'
        );
      }
    };
  }, []);
  return (
    <div ref={outerDivRef} className='outer'>
      <Dots currentPage={currentPage} />
      <Introduction
        isActiveFireWork={isActiveFireWork}
        setIsActiveFireWork={setIsActiveFireWork}
      />
      <Project />
      <Experience />
      <Cheolmin />
      <Thinkness isClicked={isClicked} />
      <Contact
        isActiveFireWork={isActiveFireWork}
        setIsActiveFireWork={setIsActiveFireWork}
      />
    </div>
  );
}

export default App;
