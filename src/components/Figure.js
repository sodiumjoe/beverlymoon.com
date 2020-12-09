import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Figure.css';

const loadImg = (src) => {
  const img = new Image();
  const promise = new Promise((resolve, reject) => {
    img.onload = () => resolve(true);
    img.onerror = reject;
  });
  img.src = src;
  return img.complete ? Promise.resolve(false) : promise;
};

const getImgOrPlaceholder = ({ alt, ready, aspectRatio, src }) => {
  return (
    <div className="placeholder-container">
      {ready ? (
        <img src={src} alt={alt} />
      ) : (
        <div className={classNames('placeholder', aspectRatio)}></div>
      )}
    </div>
  );
};

const Figure = (props) => {
  const { aspectRatio, description, link, src, title } = props;

  const [firstLoad, setFirstLoad] = React.useState();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    loadImg(src).then((firstLoad) => {
      setReady(true);
      setFirstLoad(firstLoad);
    });
  }, [src, setFirstLoad, setReady]);

  const img = getImgOrPlaceholder({
    aspectRatio,
    firstLoad,
    ready,
    src,
  });

  return (
    <figure>
      {link ? <Link to={link}>{img}</Link> : img}
      <figcaption>
        {title ? (
          link ? (
            <Link to={link}>
              <h3>{title}</h3>
            </Link>
          ) : (
            <h3>{title}</h3>
          )
        ) : null}
        {description ? <p>{description}</p> : null}
      </figcaption>
    </figure>
  );
};

export default Figure;
