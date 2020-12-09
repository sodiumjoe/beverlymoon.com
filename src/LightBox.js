import React from 'react';
import Portal from './Portal';

const LightBox = (props) => {
  const { children, onClickNext, onClickPrev, onClose } = props;

  return (
    <Portal
      portalId="lightbox"
      className="lightbox"
      leaveTimeout={300}
      ref={(c) => (this.portal = c)}
      onClick={onClose}
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close-button" onClick={onClose}>
          <span>close</span>
        </button>
        {onClickPrev ? (
          <button className="prev-button" onClick={onClickPrev}>
            <span>previous</span>
          </button>
        ) : null}
        {onClickNext ? (
          <button className="next-button" onClick={onClickNext}>
            <span>next</span>
          </button>
        ) : null}
      </div>
    </Portal>
  );
};

export default LightBox;
