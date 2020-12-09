import React from 'react';
import { createPortal } from 'react-dom';

const { useEffect, useRef } = React;

const Portal = ({ children, leaveTimeout = 0 }) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(el.current);
    const element = el.current;
    return () => {
      setTimeout(() => document.body.removeChild(element), leaveTimeout);
    };
  }, [el, leaveTimeout]);

  return createPortal(children, el.current);
};

export default Portal;
