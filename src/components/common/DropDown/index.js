import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';

let cx = classNames.bind(styles);

class DropDown extends Component {

  static propTypes = {
    onSelect: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
    selectedItem: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
    className: PropTypes.string,
  };

  state = {
    open: false,
  };

  handleOutsideClick = (e) => {
    // ignore clicks on the component itself
    if (this.dropDownEl.contains(e.target)) {
      return;
    }

    this.toggleOpen();
  }

  toggleOpen = () => {
    if (!this.state.open) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({ open: !this.state.open });
  };

  handleSelectionChange = (selectedItem) => {
    if (this.state.open) {
      this.toggleOpen();
    }
    this.props.onSelect(selectedItem);
  };

  setDropDownRef = (el) => { this.dropDownEl = el; };

  render() {
    let dropDownClasses = cx(
      'dropDown',
      this.props.className,
      { open: this.state.open },
    );

    return (
      <div className={dropDownClasses} ref={this.setDropDownRef}>
        <div className={cx('selectedItem')} onClick={this.toggleOpen}>
          <span>{this.props.selectedItem ? this.props.selectedItem.text : ''}</span>
        </div>
        <ul className={styles.items} style={{ display: this.state.open ? 'block' : 'none' }}>
          {this.props.items.map((item) =>
            <li key={item.id} onClick={() => this.handleSelectionChange(item)}>{item.text}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default DropDown;