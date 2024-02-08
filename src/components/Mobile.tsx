import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';

const MobileComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const main = document.querySelector('main') as HTMLElement;
    const header = document.querySelector('header') as HTMLElement;
    if (!header || !main) return;

    main.style.height = 'calc(100vh - ' + header.getBoundingClientRect().height + 'px)';

  }, []);

  return (
      <>
         no mobile please 
      </>  
  );
};

export default MobileComponent;
