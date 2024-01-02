import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Authorization = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (accessToken || refreshToken) {
    Swal.fire({
      icon: 'warning',
      width: '400px',
      title:
        '<span style="font-size: 24px; font-weight: bolder;">이미 로그인 된 상태입니다.</span>',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      confirmButtonText: '확인',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/main');
      }
    });
  }
};
