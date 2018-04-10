import React, { Component } from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class TextField extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
  };

  render() {
    let {leftIcon, rightIcon, ...inputProps} = this.props;
    let textField = <input {...inputProps} className={cx('text-field', this.props.className, {'has-left-icon': leftIcon, 'has-right-icon': rightIcon})} />;

    if(leftIcon || rightIcon) {
      textField = (
        <div className={cx('field-container')}>
          {leftIcon ? <span className={cx('left-icon')}>{leftIcon}</span> : null}
          {textField}
          {rightIcon ? <span className={cx('right-icon')}>{rightIcon}</span> : null}
        </div>
      );
    }

    if(this.props.label) {
      textField = (
        <label>
          <span className={cx('label-text')}>{this.props.label}</span>
          {textField}
        </label>
      );
    }

    return (
      <div className={this.props.className}>
        {textField}
      </div>
    );
  }
}

export default TextField;
