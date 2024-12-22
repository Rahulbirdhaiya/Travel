import { useEffect } from 'react';
import Swal from 'sweetalert2';

const SafetyAlert = ({ message }) => {
  useEffect(() => {
    Swal.fire({
      title: 'Safety Alert!',
      text: message,
      icon: 'warning',
      confirmButtonText: 'Understood'
    });
  }, [message]);

  return null; //we trigger the alert on mount
};

export default SafetyAlert;
