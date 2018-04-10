import React, { Component } from 'react';
import MainLayout from 'components/layouts/MainLayout';
import ConfirmDialog from 'components/common/Modal/ConfirmDialog';
import styles from './styles.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Dashboard extends Component {
  openModal = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleModalOk = () => {
    this.handleModalClose();
  };

  handleModalCancel = () => {
    this.handleModalClose();
  };

  state = {
    modalOpen: false,
  };

  render() {
    return (
      <MainLayout>
        <div className={cx('wigetContainer')}>
          <div className={cx('wigetColumn')}>
            <div className={cx('wiget')}>
              <span>Card</span>
            </div>
            <div className={cx('wiget')}>
              <span>Card</span>
            </div>
          </div>
          <div className={cx('wigetColumn')}>
            <div className={cx('wiget')}>
              <span>Card</span>
            </div>
            <div className={cx('wiget')}>
              <span>Card</span>
            </div>
          </div>
        </div>

        <button onClick={this.openModal}>open dialog</button>
        <ConfirmDialog
          handleClose={this.handleModalClose}
          handleOk={this.handleModalOk}
          handleCancel={this.handleModalCancel}
          title={'Tittle of modal'}
          open={this.state.modalOpen}
        >
          {'The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.'.repeat(
            100
          )}
        </ConfirmDialog>
      </MainLayout>
    );
  }
}

export default Dashboard;
