import React from 'react';
import propTypes from 'prop-types';
import logoRu  from  'logo-ru';
import logoEn  from  'logo-en';

import classNames from 'classnames/bind';
import styles from './styles.css';
let cx = classNames.bind(styles);


function Logo(props) {
  const className = `${__reseller__}-${__theme__}-logo-${props.lang}`;
  const logo = props.lang === 'ru' ? logoRu : logoEn;

  return <img src={logo} className={cx(className, props.className)} />;
}

Logo.propTypes = {
  lang: propTypes.string.isRequired,
  className: propTypes.string,
};

export default Logo;
