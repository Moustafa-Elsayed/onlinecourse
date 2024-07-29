import { toast } from 'react-toastify';

export const showToast = (message, type = 'info') => {
  toast(message, {
    type,
    position: "top-center", 
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
