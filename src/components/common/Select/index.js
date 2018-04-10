import React, { Component } from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
  };

  render() {
    return <ReactSelect {...this.props} className={cx('select', this.props.className)} />;
  }
}

export default Select;
