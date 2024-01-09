import Swal from 'sweetalert2';

const alertUnit = (title: string) => {
  Swal.fire({
    icon: 'info',
    width: '400px',
    title: ` ${title}`,
    confirmButtonText: '확인',
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading(),
    reverseButtons: true,
  });
};

export default alertUnit;
