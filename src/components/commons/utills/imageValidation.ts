import Swal from 'sweetalert2';

export const checkValidationFile = (file?: File) => {
  if (!file?.size) {
    Swal.fire({
      icon: 'info',
      width: '400px',
      title:
        '<span style="font-size: 24px; font-weight: bolder;">파일이 존재하지 않습니다.</span>',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      confirmButtonText: '확인',
    });
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    Swal.fire({
      icon: 'info',
      width: '400px',
      title:
        '<span style="font-size: 24px; font-weight: bolder;">파일 용량이 너무 큽니다.</span>',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      confirmButtonText: '확인',
    });
    return false;
  }

  if (
    file.type !== 'image/png' &&
    file.type !== 'image/jpg' &&
    file.type !== 'image/jpeg'
  ) {
    Swal.fire({
      icon: 'info',
      width: '400px',
      title:
        '<span style="font-size: 24px; font-weight: bolder;">유효하지 않은 파일 확장자입니다.</span>',
      text: 'png, jpg,jpeg 파일만 등록 가능합니다.',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      confirmButtonText: '확인',
    });
    return false;
  }
  return true;
};
