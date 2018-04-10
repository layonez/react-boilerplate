import React, {Component} from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatPhoneNumber } from 'utils';
import { translate } from 'react-i18next';

class Footer extends Component {
  static propTypes = {
    // from connect
    reseller: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };
  render() {
    const {t} = this.props;
    return (
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.companyInfo}>
            <span>© {this.props.reseller.name}, 2009-2018. { t('All rights reserved') }</span>
            <a target="_blank" rel="noopener noreferrer" href="https://www.croc.ru/">www.croc.ru</a> 
            <a target="_blank" rel="noopener noreferrer" href="https://cloud.croc.ru">www.cloud.croc.ru</a>
          </div>
          <div className={styles.contacts}>
            <span>{t('Tel')}:
            <a href={`tel:${this.props.reseller.phone}`}>{formatPhoneNumber(this.props.reseller.phone)}</a>
            </span>
            <span>{t('Phone to clarify the status of already submitted applications')};
            <a href={`tel:${this.props.reseller.supportPhone}`}>{formatPhoneNumber(this.props.reseller.supportPhone)}</a>
            </span>
            <span>{t('Technical support')};
            <a href={`mailto:${this.props.reseller.supportEmail}`}>{this.props.reseller.supportEmail}</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    reseller: state.reseller,
  })
)(translate()(Footer));
