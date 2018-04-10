import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import ReactDOM from 'react-dom';

let cx = classNames.bind(styles);
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClickOverlay: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  state = {
    visible: this.props.open,
  };

  componentWillReceiveProps(newProps) {
    this.setState({ visible: newProps.open });
  }

  render() {
    let modalClasses = cx(this.props.className, 'modal');

    return this.state.visible
      ? ReactDOM.createPortal(
        <Fragment>
          <div
            className={cx('overlay')}
            onClick={this.props.onClickOverlay}
          />
          <div className={modalClasses}>{this.props.children}</div>
        </Fragment>,
        modalRoot
      )
      : null;
  }
}

export default Modal;
