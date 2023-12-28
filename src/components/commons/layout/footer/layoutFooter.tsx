/*eslint-disable*/
import './layoutFooter.css';
import { FaHouseChimney } from 'react-icons/fa6';
import { IoAddCircle } from 'react-icons/io5';
import { MdPeopleAlt } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPosts } from 'src/apis/cheolmin-api/apis';
import useCalendar from '../../hooks/useCalender';
import { format, getYear, getDate } from 'date-fns';
import Swal from 'sweetalert2';

const Footer = () => {
  const { currentDate, currentMonth, currentYear } = useCalendar();

  const { data } = useQuery(['posts', currentMonth, currentYear], () =>
    getPosts({
      currentYear: getYear(currentDate),
      currentMonth: format(currentMonth, 'M'),
    })
  );

  const today = getDate(currentDate) - 1;
  const diaryCheck = data?.data[today]?.diaryId;
  const navigate = useNavigate();

  const goToMainHandler = () => {
    navigate('/main');
  };

  const goToPostHandler = () => {
    if (diaryCheck !== undefined) {
      Swal.fire({
        icon: 'info',
        width: '400px',
        title:
          '<span style="font-size: 24px; font-weight : bolder;">오늘의 일기를 이미 기록 했습니다.</span>',
        text: '상세페이지에서 삭제, 수정 하실 수 있습니다.',
        showCancelButton: true,
        cancelButtonText: '확인',
        confirmButtonText: '상세페이지 가기',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/post/${diaryCheck}`);
        }
      });
      return;
    }
    navigate('/post');
  };

  const goToCOmmunityHandler = () => {
    navigate('/community');
  };

  return (
    <div className='FooterContainer'>
      <div className='navbar'>
        <li className='list-item' onClick={goToMainHandler}>
          <FaHouseChimney style={iconStyle} />
          <span className='list-item-name'>Main</span>
        </li>
        <li className='list-item' onClick={goToPostHandler}>
          <IoAddCircle style={iconStyle} />
          <span className='list-item-name'>Post</span>
        </li>
        <li className='list-item'>
          <MdPeopleAlt style={iconStyle} onClick={goToCOmmunityHandler} />
          <span className='list-item-name'>Community</span>
        </li>
      </div>
    </div>
  );
};

export default Footer;

const iconStyle = {
  fontSize: '20px',
  color: 'white',
};
