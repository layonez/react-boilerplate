import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'components/common/Modal/Dialog';
import Button from 'components/common/Button';
import { translate } from 'react-i18next';

const ConfirmDialog = props => {
  let {
    t,
    handleOk,
    handleCancel,
    cancelMessage,
    okMessage,
    ...inputProps
  } = props;
  cancelMessage = cancelMessage || t('Cancel');
  okMessage = okMessage || t('Ok');

  const actions = [
    <Button key={cancelMessage} onClick={handleCancel}>
      {cancelMessage}
    </Button>,
    <Button key={okMessage} color="primary" onClick={handleOk}>
      {okMessage}
    </Button>,
  ];

  return (
    <Dialog {...inputProps} actions={actions} handleClose={handleCancel} />
  );
};

ConfirmDialog.propTypes = {
  okMessage: PropTypes.string,
  cancelMessage: PropTypes.string,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate()(ConfirmDialog);
