import { PropsWithChildren, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Portal = (props: PropsWithChildren) => {
  const modalRootRef = useRef(document.createElement('div'));

  useEffect(() => {
    const modalRoot = modalRootRef.current;

    if (!modalRoot.parentElement) {
      document.body.appendChild(modalRoot);
    }

    return () => {
      if (modalRoot.parentElement) {
        document.body.removeChild(modalRoot);
      }
    };
  }, [modalRootRef]);

  return ReactDOM.createPortal(props.children, modalRootRef.current);
};

export default Portal;
