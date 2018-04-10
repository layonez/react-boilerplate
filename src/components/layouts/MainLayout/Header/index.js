import React, { Component } from 'react';
import Logo from 'components/common/Logo';
import LangPicker from 'components/common/LangPicker';
import LoginForm from 'components/common/LoginForm';
import DropDown from 'components/common/DropDown';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { ADMINISTERING_PAGE_ROUTE, BACKUP_PAGE_ROUTE, CONSOLE_PAGE_ROUTE, DASHBOARD_PAGE_ROUTE, MONITORING_PAGE_ROUTE, STORAGE_PAGE_ROUTE } from 'constants';
import { translate } from 'react-i18next';

import styles from './styles.css';

class Header extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentLocation: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool,
    t: PropTypes.func.isRequired,
  };

  onMainMenuNavigate = (item) => {
    this.props.dispatch(push(item.id));
  };

  render() {
    
    const { t } = this.props;
		
    let mainMenuItems = [
      {
        id: DASHBOARD_PAGE_ROUTE, text: t('Dashboard'),
      },
      {
        id: ADMINISTERING_PAGE_ROUTE, text: t('Administering'),
      },
      {
        id: CONSOLE_PAGE_ROUTE, text: t('Console'),
      },
      {
        id: MONITORING_PAGE_ROUTE, text: t('Monitoring'),
      },
      {
        id: BACKUP_PAGE_ROUTE, text: t('Backup'),
      },
      {
        id: STORAGE_PAGE_ROUTE, text: t('Storage'),
      },
    ];

    let selectedMainMenuItem = this.props.currentLocation ?
      mainMenuItems.find((item) => this.props.currentLocation.includes(item.id)) : mainMenuItems[0];

    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <Logo lang='ru' className={styles.logo} />
          <div>
            <DropDown items={mainMenuItems} selectedItem={selectedMainMenuItem} onSelect={this.onMainMenuNavigate} className={styles.mainMenu} />
          </div>
          <LangPicker lang="ru" className={styles.langPicker} />
          {this.props.isLoggedIn ? <div>
            <div className={styles.rightButton}>
              <LoginForm></LoginForm>
            </div>
          </div> :
            null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: !!(state.user && state.user._id),
  currentLocation: state.router.location.pathname,
});

export default connect(mapStateToProps)(translate()(Header));
