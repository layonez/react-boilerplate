import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import { NavLink } from 'react-router-dom';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/lib/md';
import Divider from '../Divider';

let cx = classNames.bind(styles);

class NavigationMenu extends Component {

  static propTypes = {
    onSelect: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })),
    })).isRequired,
    className: PropTypes.string,
    baseRoutePath: PropTypes.string.isRequired,
  };

  state = {
    groupsVisiblity: this.props.items.reduce((result,item) => {
      result[item.label] = true;
      return result;
    },{}),
  }

  handleSelectionChange = (selectedItem) => {
    if (this.props.onSelect)
      this.props.onSelect(selectedItem);
  };

  toggleGroup = (group) => {
    let groupsVisiblity = Object.assign({}, this.state.groupsVisiblity);
    groupsVisiblity[group] = !this.state.groupsVisiblity[group];
    this.setState({groupsVisiblity: groupsVisiblity});
  }

  render() {
    let menuClasses = cx(
      'navigationMenu',
      this.props.className,
    );

    return (
      <div className={menuClasses} >
        <ul className={styles.menuItems} style={{ display: 'block' }}>
          {this.props.items.map((group) =>
            <div key={group.label}>
              <span
                className={cx('groupLabel')} 
                onClick={() => this.toggleGroup(group.label)}>
                {group.label}
                {this.state.groupsVisiblity[group.label] ?
                  <MdArrowDropDown /> :
                  <MdArrowDropUp />
                }
              </span>
              <ul className={styles.menuItems} hidden={!this.state.groupsVisiblity[group.label]} style={{ display: 'block' }}>
                {group.items.map((item) =>
                  <Fragment key={item.id}>
                    <Divider />
                    <li className={styles.menuItem} key={item.id} onClick={() => this.handleSelectionChange(item)}>
                      <NavLink to={this.props.baseRoutePath + '/' + item.id} activeStyle={{ color: 'red' }}>
                        {item.text}
                      </NavLink>
                    </li>
                  </Fragment>)}
              </ul>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default NavigationMenu;