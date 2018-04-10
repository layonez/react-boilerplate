import React, { Component } from 'react';
import MainLayout from 'components/layouts/MainLayout';
import NavigationMenu from '../../common/NavigationMenu';
import { CONSOLE_PAGE_ROUTE } from 'constants';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './styles.css';
import { Switch, Route } from 'react-router-dom';
import VirtualMachines from './VirtualMachines';
import { translate } from 'react-i18next';

let cx = classNames.bind(styles);

class Console extends Component {
  static propTypes = {
    currentPath: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  }

  render() {
    const {t} = this.props;

    const menuItems = [
      {
        label: t('Virtual machines'),
        items: [
          { id: 'vms', text: t('Instances') },
          { id: 'disks', text: t('Drives') },
          { id: 'templates', text: t('Templates') },
          { id: 'images', text: t('Discs Images') },
          { id: 'import', text: t('Import/Export' ) },
          { id: 'acGroups', text: t('Accommodation Groups' ) },
        ],
      },
      {
        label: t('Net'),
        items: [
          { id: 'clouds', text: t('Private clouds'  ) },
          { id: 'adresses', text: t('Addresses'  ) },
          { id: 'nets', text: t('Virtual networks'  ) },
          { id: 'devices', text: t('Virtual switches'  ) },
          { id: 'interfaces', text: t('Network interfaces'  ) },
          { id: 'vpn', text: t('VPN connections'  ) },
          { id: 'externalNets', text: t('External networks'  ) },
          { id: 'routing', text: t('Routing Tables'  ) },
          { id: 'netmap', text: t('Network Map'  ) },
        ],
      },
      {
        label: t('Access and security'),
        items: [
          { id: 'acces', text: t('Access control lists' )},
          { id: 'securityGroups', text: t('Security groups' )},
          { id: 'sshKeys', text: t('SSH keys' )},
          { id: 'DHCP', text: t('DHCP Options' )},
        ],
      },
    ];
		
    return (
      <MainLayout>
        <div className={cx('navigationPanel')}>
          <NavigationMenu items={menuItems} baseRoutePath={CONSOLE_PAGE_ROUTE}></NavigationMenu>
        </div>
        <div className={cx('contentContainer')}>
          <Switch>
            <Route path={CONSOLE_PAGE_ROUTE + '/vms'} component={VirtualMachines} />
          </Switch>
        </div>
      </MainLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPath: state.router.location.pathname,
  };
};

export default connect(mapStateToProps)(translate()(Console));
