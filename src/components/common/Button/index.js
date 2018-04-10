import React, { Component, Fragment } from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    color: 'default',
    isLoading: false,
  };

  render() {
    let {leftIcon, rightIcon, isLoading, ...inputProps} = this.props;
    return (
      <button {...inputProps} className={cx('button', this.props.color)} disabled={isLoading}>
        {
          isLoading ?
            'loading...'
            :
            <Fragment>
              {leftIcon ? <span className={cx('left-icon')}>{leftIcon}</span> : null}
              <span>{this.props.children}</span>
              {rightIcon ? <span className={cx('right-icon')}>{rightIcon}</span> : null}
            </Fragment>
        }
      </button>
    );
  }
}

export default Button;
