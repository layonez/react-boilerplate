import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import BaseModal from 'components/common/Modal/BaseModal';
import { MdClose } from 'react-icons/lib/md';

let cx = classNames.bind(styles);

class Dialog extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    handleClose: PropTypes.func.isRequired,
    actions: PropTypes.arrayOf(PropTypes.element),
    children: PropTypes.node.isRequired,
  };

  onClickOverlay = () => {
    this.props.handleClose();
  };

  cancel = () => {
    this.props.handleClose();
  };

  proceed = () => {
    this.props.handleClose();
  };

  render() {
    const tittleClass = cx('tittle');
    let { open, title, actions, children, ...inputProps } = this.props;

    return (
      <BaseModal
        {...inputProps}
        onClickOverlay={this.onClickOverlay}
        open={open}
      >
        <div className={cx('header')}>
          {title ? <h3 className={tittleClass}>{title}</h3> : null}
          <span className={cx('close')} onClick={this.cancel}>
            <MdClose />
          </span>
        </div>
        <div className={cx('content')}>{children}</div>
        <div className={cx('footer')}>{actions}</div>
      </BaseModal>
    );
  }
}

export default Dialog;
