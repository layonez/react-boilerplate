import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';

let cx = classNames.bind(styles);

const Divider = (className) => {
	
  return (
    <hr className={cx('divider', className)}/>
  );
};

export default Divider;